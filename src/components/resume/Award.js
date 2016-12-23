import React, { Component } from 'react';

import Link from '../Link';
import Period from './Period';
import List from './List';

class Award extends Component {
  render() {
    const { award } = this.props;

    return (
      <div className="award">
        <h4 className="section-name">
          <Link  { ...award.name } />
        </h4>
        <div className="section-title">{ award.title }</div>
        <Period period={ award.period } />
        <List items={ award.items } />
      </div>
    );
  }
}

export default Award;
