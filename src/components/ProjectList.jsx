import React, { Component } from 'react';
import classNames from 'classnames';
import { icons, projects } from './../../data.js';

class Project extends Component {
  openGithub = github => {
    window.open(`https://github.com/${github}`, '_blank');
  };
  openProject = url => {
    window.open(`https://${url}`, '_blank');
  };
  render() {
    const { name, github, url, description, icons } = this.props;
    return (
      <div className="project-container">
        <div className="helper">
          <p className="project-name" onClick={() => this.openProject(url)}>
            {name}
          </p>
          <div className="icons-container">
            <i
              className="devicon devicon-github-plain"
              onClick={() => this.openGithub(github)}
              style={{ cursor: 'pointer' }}
            />
            {icons.map(icon => (
              <i className={icon.className} key={icon.name} />
            ))}
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
