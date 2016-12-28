import React, { Component, PropTypes } from 'react';

import Period from './Period';
import Item from './Item';

class Company extends Component {
  static propTypes = {
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ...Period.propTypes.isRequired,
      item: Item.propTypes.isRequired
    }).isRequired
  }

  render() {
    const { company } = this.props;

    return (
      <div className="company">
        <h3 className="section-name">{ company.name }</h3>
        <div className="section-title">{ company.title }</div>
        <Period period={ company.period } />
        <Item { ...company.item } />
      </div>
    );
  }
}

export default Company;
