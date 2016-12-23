import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/resume/Header';

class Resume extends Component {
  render() {
    const { header } = this.props;

    return (
      <main>
        <Header header={ header } />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Resume);
