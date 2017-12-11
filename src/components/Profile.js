import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import User from './User';
import searchIcon from '../images/search.svg';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.match.params.username,
      requestFailed: false
    };
  }

  getGithubData() {
    console.log("aaaa");
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
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

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
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

        ReactDOM.render(<User githubData={this.state.githubData} />, document.getElementById('app-content'));
      }, () => {
        this.setState({
          requestFailed: true
        })
    })
  }

  render() {
    return (
      <Search />
    );
  }
}

export default Profile;
