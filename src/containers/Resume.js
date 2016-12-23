import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/resume/Header';
import Section from '../components/resume/Section';

class Resume extends Component {
  render() {
    const { header, summary } = this.props;

    return (
      <main>
        <Header header={ header } />
        <div className="container">
          <Section section={ summary } />
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Resume);
