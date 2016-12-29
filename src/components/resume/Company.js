import React, { Component, PropTypes } from 'react';

import Period from './Period';
import Item from '../Item';

class Company extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ...Period.propTypes.isRequired,
    item: PropTypes.shape(Item.propTypes).isRequired
  }

  render() {
    const { name, title, period, item } = this.props;

    return (
      <div className="company">
        <h3 className="section-name">{ name }</h3>
        <div className="section-title">{ title }</div>
        <Period period={ period } />
        <Item { ...item } />
      </div>
    );
  }
}

export default Company;
