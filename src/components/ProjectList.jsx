import React, { Component } from 'react';
import classNames from 'classnames';
import { icons, projects } from './../../data.js';

class Project extends Component {
  render() {
    const { name, github, description, icons } = this.props;
    return (
      <div className="project-container">
        <div className="helper">
          <p className="project-name">{name}</p>
          <div className="icons-container">
            {icons.map(icon => <i className={icon.className} />)}
          </div>
        </div>
        <p className="project-description">{description}</p>
      </div>
    );
  }
}

const ProjectList = () => (
  <div className="main inner-container">
    <h1 className="main-title">Project</h1>
    <div className="main-article">
      {projects.map(project => <Project key={project.name} {...project} />)}
    </div>
  </div>
);

export default ProjectList;
