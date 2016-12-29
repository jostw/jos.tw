import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/resume/Header';
import Section from '../../components/resume/Section';
import Footer from '../../components/resume/Footer';

class App extends Component {
  static propTypes = {
    header: PropTypes.shape(Header.propTypes).isRequired,
    summary: PropTypes.shape(Section.propTypes).isRequired,
    experience: PropTypes.shape(Section.propTypes).isRequired,
    project: PropTypes.shape(Section.propTypes).isRequired,
    award: PropTypes.shape(Section.propTypes).isRequired,
    education: PropTypes.shape(Section.propTypes).isRequired,
    publication: PropTypes.shape(Section.propTypes).isRequired,
    skill: PropTypes.shape(Section.propTypes).isRequired,
    footer: PropTypes.shape(Footer.propTypes).isRequired
  }

  render() {
    const { header, summary, experience, project, award, education, publication, skill, footer } = this.props;

    return (
      <main>
        <Header { ...header } />
        <div className="container">
          <Section { ...summary } />
          <Section { ...experience } />
          <Section { ...project } />
          <Section { ...award } />
          <Section { ...education } />
          <Section { ...publication } />
          <Section { ...skill } />
        </div>
        <Footer { ...footer } />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
