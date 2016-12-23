import React, { Component } from 'react';

class Skill extends Component {
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
