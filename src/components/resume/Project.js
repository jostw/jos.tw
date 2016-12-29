import React, { Component, PropTypes } from 'react';

import Link from '../Link';
import Period from './Period';
import List from '../../containers/resume/List';

class Project extends Component {
  static propTypes = {
    name: PropTypes.shape(Link.propTypes).isRequired,
    ...Period.propTypes.isRequired,
    items: List.propTypes.items.isRequired,
    hide_from_print: PropTypes.bool
  }

  render() {
    const { name, period, items } = this.props;

    let classList = ['project'];
    let projectName = null;

    if (this.props.hide_from_print) {
      classList = [...classList, 'hide-from-print'];
    }

    if (name.link) {
      projectName = (
        <Link { ...name } />
      );
    } else if (name.ps) {
      projectName = (
        <span>
          { name.content }
          <span className="project-name-ps">({ name.ps })</span>
        </span>
      );
    } else {
      projectName = name.content;
    }

    return (
      <div className={ classList.join(' ') }>
        <h4 className="section-name">{ projectName }</h4>
        <Period period={ period } />
        <List items={ items } />
      </div>
    );
  }
}

export default Project;
