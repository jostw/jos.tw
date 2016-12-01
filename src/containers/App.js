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
    const { hello, about, project, resume, contact, response } = this.props;

    return (
      <div>
        <Section section={ hello } />
        <Section section={ about } />
        <Section section={ project } />
        <Section section={ resume } />
        <Section section={ contact } />
        <Response response={ response } />
      </div>
    );
  }
}

function mapSectionToMessages(...sections) {
  return sections.map(section => {
    if (section.response) {
      return [section.response, ...section.messages];
    }

    return section.messages;
  });
}

function mapStateToProps({
  hello: { helloWorld },
  about: { aboutYourself },
  project: { projectList, projectFirefox, projectGaia },
  resume: { resumeLink, resumeMore },
  contact: { contactMail },
  response
}) {
  return {
    hello: mapSectionToMessages(helloWorld),
    about: mapSectionToMessages(aboutYourself),
    project: mapSectionToMessages(projectList, projectFirefox, projectGaia),
    resume: mapSectionToMessages(resumeLink, resumeMore),
    contact: mapSectionToMessages(contactMail),
    response: response,
    responseMap: {
      [actions.SECTION_ABOUT_YOURSELF]: aboutYourself.response,
      [actions.SECTION_PROJECT_LIST]: projectList.response,
      [actions.SECTION_PROJECT_FIREFOX]: projectFirefox.response,
      [actions.SECTION_PROJECT_GAIA]: projectGaia.response,
      [actions.SECTION_RESUME_LINK]: resumeLink.response,
      [actions.SECTION_RESUME_MORE]: resumeMore.response,
      [actions.SECTION_CONTACT_MAIL]: contactMail.response
    }
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { hello, about, project, resume, contact, response, responseMap } = stateProps;

  return Object.assign({}, ownProps, {
    hello, about, project, resume, contact,
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
