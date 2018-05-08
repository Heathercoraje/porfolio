import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/bg.jpeg';
import profile from '../../assets/profile.jpg';
const Header = () => (
  <div className="header">
    <div className="inner-container inner-header-container">
      <div className="inner-header-left">
        <a href="/">
          <p className="name">Heuikyung Heather Yun</p>
          <p className="title"> &lt;/&gt; web developer &lt;/&gt;</p>
        </a>
      </div>
      <div className="inner-header-right">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
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
