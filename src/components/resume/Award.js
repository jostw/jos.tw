import React, { Component, PropTypes } from 'react';

import Link from '../Link';
import Period from './Period';
import List from '../../containers/resume/List';

class Award extends Component {
  static propTypes = {
    name: PropTypes.shape(Link.propTypes).isRequired,
    title: PropTypes.string.isRequired,
    ...Period.propTypes.isRequired,
    items: List.propTypes.items.isRequired
  }

  render() {
    const { name, title, period, items } = this.props;

    return (
      <div className="award">
        <h4 className="section-name">
          <Link { ...name } />
        </h4>
        <div className="section-title">{ title }</div>
        <Period period={ period } />
        <List items={ items } />
      </div>
    );
  }
}

export default Award;
