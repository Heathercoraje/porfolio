import React from 'react';
import { Link } from 'react-router-dom';

const Base = () => (
  <div className="main inner-container">
    <h1 className="main-title">Latest Project</h1>
    <p className="main-article">
      <a
        className="pomotris-link"
        href="http://pomotris.surge.sh/"
        target="_blank"
      >
        Pomotris
      </a>{' '}
      is a pomodoro timer web application with a cube chart which visualizes
      records with colorful cubes. Each cube represents 5 mins. A user can set a
      color for each catagory of tasks. Currently, Heather is working on the
      second sprint of Pomotris project.
    </p>
    <a
      target="_blank"
      href="https://github.com/Heathercoraje/pomotris-vh"
      className="button-like"
    >
      Visit Repo <i className="fab fa-github" />
    </a>
    <Link to="/projects" className="button-like">
      More Projects <i className="fas fa-list-ul" />
    </Link>
  </div>
);

export default Base;
