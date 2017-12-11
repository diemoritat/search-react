import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class User extends Component {

  constructor(props) {
    super(props);

    this.username = this.props.githubData.login;

    this.showRepos = this.showRepos.bind(this);
    this.showStarred = this.showStarred.bind(this);
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

        ReactDOM.render((
            <ul className="list__content">
              {this.state.repositoriesData.map((repo) =>
                <li key={repo.id} className="list__item">
                  <p className="list__item-title">{repo.name}</p>
                  <a href="{repo.html_url}" target="_blank" className="list__item-url">{repo.html_url}</a>
                  {repo.language != null &&
                    <p className="list__item-tag">{repo.language}</p>}
                </li>
              )}
            </ul>
        ), document.getElementById('tab__repo-content'));

        document.getElementById('tab__repo-content').classList.add('active');
        document.getElementById('tab__repo').classList.add('active');
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

        ReactDOM.render((
            <ul className="list__content">
              {this.state.starredData.map((starred) =>
                <li key={starred.id} className="list__item">
                  <p className="list__item-title">{starred.name}</p>
                  <a href="{starred.html_url}" target="_blank" className="list__item-url">{starred.html_url}</a>
                  {starred.language != null &&
                    <p className="list__item-tag">{starred.language}</p>}
                </li>
              )}
            </ul>
        ), document.getElementById('tab__starred-content'));

        document.getElementById('tab__starred-content').classList.add('active');
        document.getElementById('tab__starred').classList.add('active');
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
            <div className="user__tab  tab__repositories" id="tab__repo" onClick={this.showRepos}>See Repos
              <span className="user__tab-icon"></span>
            </div>
            <div className="tab__content tab__repositories-content" id="tab__repo-content">

            </div>
            <div className="user__tab  tab__starred" id="tab__starred" onClick={this.showStarred}>See Starred
              <span className="user__tab-icon"></span>
            </div>
            <div className="tab__content tab__starred-content" id="tab__starred-content">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default User;
