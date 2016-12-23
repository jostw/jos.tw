import React, { Component } from 'react';

class Period extends Component {
  render() {
    const { period } = this.props;

    let time = null;

    if (typeof period === 'object') {
      time = `${period.begin} - ${period.end}`;
    } else {
      time = period;
    }

    return (
      <div className="period">{ time }</div>
    );
  }
}

export default Period;
