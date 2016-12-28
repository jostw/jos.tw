import React, { Component, PropTypes } from 'react';

class Skill extends Component {
  static propTypes = {
    skill: PropTypes.shape({
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  }

  render() {
    const { skill } = this.props;

    return (
      <div className="skill">
        <span className="section-name">{ skill.name }:</span>
        <span>{ skill.items.join(', ') }</span>
      </div>
    );
  }
}

export default Skill;
