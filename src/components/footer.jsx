import React from 'react';
import { socials } from './../../data.js';

const Footer = () => (
  <div className="footer-container">
    <div className="footer inner-container">
      <ul className="profile-social-links">
        {socials.map(social => (
          <li key={social.name}>
            <a href={social.url} className="socialIcon">
              <i className={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Footer;
