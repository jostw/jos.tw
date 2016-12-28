import React, { Component, PropTypes } from 'react';

import Link from '../Link';
import Period from './Period';
import List from '../../containers/resume/List';

class Award extends Component {
  static propTypes = {
    award: PropTypes.shape({
      name: Link.propTypes.isRequired,
      title: PropTypes.string.isRequired,
      ...Period.propTypes.isRequired,
      items: List.propTypes.items.isRequired
    }).isRequired
  }

  render() {
    const { award } = this.props;

    return (
      <div className="award">
        <h4 className="section-name">
          <Link { ...award.name } />
        </h4>
        <div className="section-title">{ award.title }</div>
        <Period period={ award.period } />
        <List items={ award.items } />
      </div>
    );
  }
}

export default Award;
