import React, { Component } from 'react';
import '../User.css';

class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="user_image">
          <img src="" alt=""/>
        </div>
        <div className="user_copy">
          <h3 className="user_name">John Doe </h3>
          <p className="user_username">@diemoritat | Location | Email</p>
          <a href="#" target="_blank" className="user_site-url">http://myblog.com</a>

          <p className="user_stats"><strong>Followers:</strong> 50</p>
          <p className="user_stats"><strong>Following:</strong> 173</p>

          <p className="user_bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    );
  }
}

export default User;
