import React, { Component } from 'react';
import { connect } from 'react-redux';

class Resume extends Component {
  render() {
    return (
      <main>Hello Resume!</main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Resume);
