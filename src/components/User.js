import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user  col-12">
        <div className="user__image">
          <img src={this.props.data.avatar_url} alt=""/>
        </div>
        <div className="user__info">
          <div className="user__info--top">
            <h3 className="user__name">{this.props.data.name}</h3>
            <p className="user__username">
              <strong>{this.props.data.login == null ? '' : this.props.data.login}</strong>
            </p>
            <p className="user__username">
              {this.props.data.location == null ? '' : this.props.data.location}
              {this.props.data.email == null ? '' : " | " + this.props.data.location}</p>
            <a href={this.props.data.blog} target="_blank" className="user__site-url">{this.props.data.blog}</a>
          </div>
          <span className="user__divider"></span>

          <div className="user__info--bottom">
            <p className="user__stats"><strong>Followers:</strong> {this.props.data.followers}</p>
            <p className="user__stats"><strong>Following:</strong> {this.props.data.following}</p>

            <p className="user__bio"> {this.props.data.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
