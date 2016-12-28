import React, { Component, PropTypes } from 'react';

import Link from '../Link';
import Period from './Period';
import List from './List';

class Project extends Component {
  static propTypes = {
    project: PropTypes.shape({
      name: Link.propTypes.isRequired,
      ...Period.propTypes.isRequired,
      items: List.propTypes.items.isRequired,
      hide_from_print: PropTypes.bool
    }).isRequired
  }

  render() {
    const { project } = this.props;

    let classList = ['project'];
    let name = null;

    if (project.hide_from_print) {
      classList = [...classList, 'hide-from-print'];
    }

    if (project.name.link) {
      name = (
        <Link { ...project.name } />
      );
    } else if (project.name.ps) {
      name = (
        <span>
          { project.name.content }
          <span className="project-name-ps">({ project.name.ps })</span>
        </span>
      );
    } else {
      name = project.name.content;
    }

    return (
      <div className={ classList.join(' ') }>
        <h4 className="section-name">{ name }</h4>
        <Period period={ project.period } />
        <List items={ project.items } />
      </div>
    );
  }
}

export default Project;
