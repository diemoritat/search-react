import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props);

    this.username = this.props.githubData.login;

    this.showRepos = this.showRepos.bind(this, this.username);
    this.showStarred = this.showStarred.bind(this, this.username);
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
          repositoriesData: data
        });

        console.log(this.state.repositoriesData);

        // ReactDOM.render(
        //   <RepoList data={this.state.repositoriesData} />
        // , document.getElementById('tab__content'));

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
          starredData: data
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
          <img src={this.props.githubData.avatar_url} alt=""/>
        </div>
        <div className="user__info">
          <div className="user__info--top">
            <h3 className="user__name">{this.props.githubData.name}</h3>
            <p className="user__username">
              <strong>{this.props.githubData.login}</strong>
            </p>
            <p className="user__username">
              {this.props.githubData.location == null ? '' : this.props.githubData.location}
              {this.props.githubData.email == null ? '' : " | " + this.props.githubData.location}</p>
            <a href={this.props.githubData.blog} target="_blank" className="user__site-url">{this.props.githubData.blog}</a>
          </div>
          <div className="user__info--bottom">
            <p className="user__bio"> {this.props.githubData.bio}</p>
          </div>
          <div className="user__info--count">
            <p className="user__stats">
              Followers <span>{this.props.githubData.followers}</span>
            </p>
            <p className="user__stats">
              Following <span>{this.props.githubData.following}</span>
            </p>
            <p className="user__stats">
              Repositories <span>{this.props.githubData.public_repos}</span>
            </p>
            <p className="user__stats">
              Gists <span>{this.props.githubData.public_gists}</span>
            </p>
          </div>
        </div>

        <div className="user__additional-info">
          <div className="user__tablist">
            <div className="user__tab" onClick={this.showRepos}>See Repos
              <span className="user__tab-icon"></span>
            </div>
            <div className="user__tab" onClick={this.showStarred}>See Starred
              <span className="user__tab-icon"></span>
            </div>
          </div>
          <div className="user__tabpanel" id="tab__content">

          </div>
        </div>
      </div>
    );
  }
}

export default User;
