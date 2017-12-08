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
        <form className="search_container__form" onSubmit={this.handleSubmit}>
          <label>
            <span className="search_container__label"> FindHub </span>
            <input type="text" name="username" className="search_container__input" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" className="search_container__submit" />
        </form>
      </div>
    );
  }
}

export default Header;
