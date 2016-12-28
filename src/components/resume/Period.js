import React, { Component, PropTypes } from 'react';

class Period extends Component {
  static propTypes = {
    period: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        begin: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
      })
    ]).isRequired
  }

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
