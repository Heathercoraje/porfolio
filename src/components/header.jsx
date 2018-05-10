import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import backgroundImage from '../../assets/bg.jpeg';
import profile from '../../assets/profile.jpg';

class Header extends Component {
  state = {
    active: null
  };
  addActive = tabName => {
    this.setState({
      active: tabName
    });
  };
  render() {
    return (
      <div className="header">
        <div className="inner-container inner-header-container">
          <div className="inner-header-left">
            <Link to="/">
              <p className="name" onClick={() => this.addActive(null)}>
                Heuikyung Heather Yun
              </p>
              <p className="title"> &lt;/&gt; web developer &lt;/&gt;</p>
            </Link>
          </div>
          <div className="inner-header-right">
            <ul>
              <li>
                <Link
                  to="/about"
                  className={classnames({
                    tab: true,
                    active: this.state.active === 'about'
                  })}
                  onClick={() => this.addActive('about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={classnames({
                    tab: true,
                    active: this.state.active === 'projects'
                  })}
                  onClick={() => this.addActive('projects')}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="profileImage-container">
          <img className="profileImage" src={profile} alt="heather-profile" />
        </div>
      </div>
    );
  }
}

export default Header;
