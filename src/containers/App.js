import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Section from './Section';
import Response from '../components/Response';
import Modal from '../components/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    Section.prototype.toggleModal = props.actions.toggleModal;
    Modal.prototype.onImageLoad = props.actions.showModalImage;
    Modal.prototype.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.actions.startSection();
  }

  render() {
    const { hello, about, project, resume, contact, response, modal } = this.props;

    return (
      <div>
        <Section section={ hello } />
        <Section section={ about } />
        <Section section={ project } />
        <Section section={ resume } />
        <Section section={ contact } />
        <Response response={ response } />
        <Modal modal={ modal } />
      </div>
    );
  }

  closeModal() {
    this.props.actions.toggleModal(false);
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

function mapProjectNameToResponse(response) {
  return {
    ...response,
    content: response.name
  };
}

function mapStateToProps({
  hello: { helloWorld },
  about: { aboutYourself, aboutMore },
  project: {
    projectList, projectFirefox, projectGaia, projectMarketplaceApp,
    projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy
  },
  resume: { resumeLink, resumeMore },
  contact: { contactMail },
  response, modal
}) {
  const responseMap = {
    [actions.SECTION_ABOUT_YOURSELF]: aboutYourself.response,
    [actions.SECTION_ABOUT_MORE]: aboutMore.response,
    [actions.SECTION_PROJECT_LIST]: projectList.response,
    [actions.SECTION_PROJECT_FIREFOX]: mapProjectNameToResponse(projectFirefox.response),
    [actions.SECTION_PROJECT_GAIA]: mapProjectNameToResponse(projectGaia.response),
    [actions.SECTION_PROJECT_MARKETPLACE_APP]: mapProjectNameToResponse(projectMarketplaceApp.response),
    [actions.SECTION_PROJECT_MUZIK_LIST]: projectMuzikList.response,
    [actions.SECTION_PROJECT_MUZIK_AIR]: mapProjectNameToResponse(projectMuzikAir.response),
    [actions.SECTION_PROJECT_MUZIK_ONLINE]: mapProjectNameToResponse(projectMuzikOnline.response),
    [actions.SECTION_PROJECT_MUZIK_STUDY]: mapProjectNameToResponse(projectMuzikStudy.response),
    [actions.SECTION_RESUME_LINK]: resumeLink.response,
    [actions.SECTION_RESUME_MORE]: resumeMore.response,
    [actions.SECTION_CONTACT_MAIL]: contactMail.response
  };

  return {
    hello: mapSectionToMessages(helloWorld),
    about: mapSectionToMessages(aboutYourself, aboutMore),
    project: mapSectionToMessages(
      projectList, projectFirefox, projectGaia, projectMarketplaceApp,
      projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy
    ),
    resume: mapSectionToMessages(resumeLink, resumeMore),
    contact: mapSectionToMessages(contactMail),
    response, responseMap, modal
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { hello, about, project, resume, contact, response, responseMap, modal } = stateProps;

  return {
    ...ownProps,
    hello, about, project, resume, contact,
    response: {
      messages: response.sections.map(section => {
        return {
          ...responseMap[section],
          is_visible: true,
          onclick: e => {
            e.preventDefault();

            dispatchProps.actions.startSection(section);
          }
        };
      }),
      is_visible: response.is_visible
    },
    modal,
    actions: dispatchProps.actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
