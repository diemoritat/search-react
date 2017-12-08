import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from './User';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      requestFailed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`https://api.github.com/users/${this.state.value}`)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          githubData: data
        });
        console.log(data);

        ReactDOM.render(<User data={this.state.githubData} />, document.getElementById('content__container'));
      }, () => {
        this.setState({
          requestFailed: true
        })
    })
  }

  render() {
    return (
      <div className="search_container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" name="username" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Header;
