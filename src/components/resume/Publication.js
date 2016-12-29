import React, { Component, PropTypes } from 'react';

class Publication extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { name, title } = this.props;

    return (
      <div className="publication">
        <h5 className="section-name">{ name }</h5>
        <div className="section-title">{ title }</div>
      </div>
    );
  }
}

export default Publication;
