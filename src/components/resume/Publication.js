import React, { Component, PropTypes } from 'react';

class Publication extends Component {
  static propTypes = {
    publication: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  }

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
