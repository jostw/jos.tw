import React, { Component, PropTypes } from 'react';

class Skill extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { name, items } = this.props;

    return (
      <div className="skill">
        <span className="section-name">{ name }:</span>
        <span>{ items.join(', ') }</span>
      </div>
    );
  }
}

export default Skill;
