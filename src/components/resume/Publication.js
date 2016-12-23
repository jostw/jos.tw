import React, { Component } from 'react';

class Publication extends Component {
  render() {
    const { publication } = this.props;

    return (
      <div className="publication">
        <h5 className="section-name">{ publication.name }</h5>
        <div className="section-title">{ publication.title }</div>
      </div>
    );
  }
}

export default Publication;
