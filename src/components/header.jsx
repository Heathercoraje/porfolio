import React from 'react';
import backgroundImage from '../../assets/bg.jpeg';
import profile from '../../assets/profile.jpg';
const Header = () => (
  <div className="header">
    <div className="inner-container inner-header-container">
      <div className="inner-header-left">
        <p className="name">Heuikyung Heather Yun</p>
        <p className="title"> &lt;/&gt; web developer &lt;/&gt;</p>
      </div>
      <div className="inner-header-right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="profileImage-container">
      <img className="profileImage" src={profile} alt="heather-profile" />
    </div>
  </div>
);

export default Header;
