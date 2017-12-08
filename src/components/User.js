import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user">
        <div className="user_image">
          <img src={this.props.data.avatar_url} alt=""/>
        </div>
        <div className="user_copy">
          <h3 className="user_name">{this.props.data.name}</h3>
          <p className="user_username">@diemoritat | Location | Email</p>
          <a href="#" target="_blank" className="user_site-url">http://myblog.com</a>

          <p className="user_stats"><strong>Followers:</strong> {this.props.data.followers}</p>
          <p className="user_stats"><strong>Following:</strong> {this.props.data.following}</p>

          <p className="user_bio"> {this.props.data.bio}</p>
        </div>
      </div>
    );
  }
}

export default User;
