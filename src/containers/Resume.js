import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/resume/Header';
import Section from '../components/resume/Section';
import Footer from '../components/resume/Footer';

class Resume extends Component {
  static propTypes = {
    ...Header.propTypes.section,
    summary: Section.propTypes.section,
    experience: Section.propTypes.section,
    project: Section.propTypes.section,
    award: Section.propTypes.section,
    education: Section.propTypes.section,
    publication: Section.propTypes.section,
    skill: Section.propTypes.section,
    ...Footer.propTypes.isRequired
  }

  render() {
    const { header, summary, experience, project, award, education, publication, skill, footer } = this.props;

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
        <Footer footer={ footer } />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Resume);
