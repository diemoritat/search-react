import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props);

    this.username = this.props.data.login;

    this.showRepos = this.showRepos.bind(this, this.username);
    this.showStarred = this.showStarred.bind(this, this.username);

    console.log(this.username);
  }

  showRepos(event) {
    let username = this.username;

    fetch(`https://api.github.com/users/${username}/repos`)
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

        //ReactDOM.render(<User data={this.state.githubData} />, document.getElementById('app-content'));
      }, () => {
        this.setState({
          requestFailed: true
        })
    })
  }

  showStarred(event) {
    let username = this.username;

    fetch(`https://api.github.com/users/${username}/starred`)
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

        //ReactDOM.render(<User data={this.state.githubData} />, document.getElementById('app-content'));
      }, () => {
        this.setState({
          requestFailed: true
        })
    })
  }

  render() {
    return (
      <div className="user">
        <div className="user__image">
          <img src={this.props.data.avatar_url} alt=""/>
        </div>
        <div className="user__info">
          <div className="user__info--top">
            <h3 className="user__name">{this.props.data.name}</h3>
            <p className="user__username">
              <strong>{this.props.data.login}</strong>
            </p>
            <p className="user__username">
              {this.props.data.location == null ? '' : this.props.data.location}
              {this.props.data.email == null ? '' : " | " + this.props.data.location}</p>
            <a href={this.props.data.blog} target="_blank" className="user__site-url">{this.props.data.blog}</a>
          </div>
          <div className="user__info--bottom">
            <p className="user__bio"> {this.props.data.bio}</p>
          </div>
          <div className="user__info--count">
            <p className="user__stats">
              Followers <span>{this.props.data.followers}</span>
            </p>
            <p className="user__stats">
              Following <span>{this.props.data.following}</span>
            </p>
            <p className="user__stats">
              Repositories <span>{this.props.data.public_repos}</span>
            </p>
            <p className="user__stats">
              Gists <span>{this.props.data.public_gists}</span>
            </p>
          </div>
        </div>
        <div className="user__additional-info">
          <div className="user__tab" onClick={this.showRepos}>See Repos 
            <span className="user__tab-icon"></span>
          </div>
          <div className="user__tab" onClick={this.showStarred}>See Starred
            <span className="user__tab-icon"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
