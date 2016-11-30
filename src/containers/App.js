import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Section from '../components/Section';
import Response from '../components/Response';

class App extends Component {
  componentDidMount() {
    this.props.actions.startSection();
  }

  render() {
    const { hello, about, project, resume, response } = this.props;

    return (
      <div>
        <Section section={ hello } />
        <Section section={ about } />
        <Section section={ project } />
        <Section section={ resume } />
        <Response response={ response } />
      </div>
    );
  }
}

function mapStateToProps({ hello, about, project, resume, response }) {
  const { helloWorld } = hello;
  const { aboutYourself } = about;
  const { projectList, projectFirefox } = project;
  const { resumeLink, resumeMore } = resume;

  return {
    hello: [helloWorld],
    about: [aboutYourself],
    project: [projectList, projectFirefox],
    resume: [resumeLink, resumeMore],
    response: response,
    responseMap: {
      [actions.SECTION_ABOUT_YOURSELF]: aboutYourself.response,
      [actions.SECTION_PROJECT_LIST]: projectList.response,
      [actions.SECTION_PROJECT_FIREFOX]: projectFirefox.response,
      [actions.SECTION_RESUME_LINK]: resumeLink.response,
      [actions.SECTION_RESUME_MORE]: resumeMore.response
    }
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeMessages(section) {
  if (section.response) {
    return [section.response, ...section.messages];
  }

  return section.messages;
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { hello, about, project, resume, response, responseMap } = stateProps;

  return Object.assign({}, ownProps, {
    hello: hello.map(mergeMessages),
    about: about.map(mergeMessages),
    project: project.map(mergeMessages),
    resume: resume.map(mergeMessages),
    response: {
      messages: response.sections.map(section => {
        return Object.assign({}, responseMap[section], {
          is_visible: true,
          onclick: e => {
            e.preventDefault();

            dispatchProps.actions.startSection(section);
          }
        });
      }),
      is_visible: response.is_visible
    },
    actions: dispatchProps.actions
  });
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
