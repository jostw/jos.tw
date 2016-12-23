import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/resume/Header';
import Section from '../components/resume/Section';

class Resume extends Component {
  render() {
    const { header, summary, experience, project, award, education, publication, skill } = this.props;

    return (
      <main>
        <Header header={ header } />
        <div className="container">
          <Section section={ summary } />
          <Section section={ experience } />
          <Section section={ project } />
          <Section section={ award } />
          <Section section={ education } />
          <Section section={ publication } />
          <Section section={ skill } />
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Resume);
