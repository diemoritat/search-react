import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import searchIcon from '../images/search.svg';

class Search extends Component {
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

        ReactDOM.render(<User githubData={this.state.githubData} />, document.getElementById('app-content'));
      }, () => {
        this.setState({
          requestFailed: true
        })
    })
  }

  render() {
    return (
      <div className="search  container">
        <form className="search__form" onSubmit={this.handleSubmit}>
          <div className="search__input-holder">
            <input type="text" id="username" name="username" placeholder="Type a GitHub username" required className="search__input" value={this.state.value} onChange={this.handleChange} />
            <button type="submit" value="Submit" className="search__submit">
              <img src={searchIcon} alt="logo" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
