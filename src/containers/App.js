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

let responseMap = {};

function mapSectionToResponse(section, state) {
  if (state) {
    let { response } = state;

    if (response.name) {
      response = {
        ...response,
        content: response.name
      };
    }

    responseMap = {
      ...responseMap,
      [section]: response
    };
    return;
  }

  return responseMap[section];
}

function mapStateToProps({
  hello: { helloWorld },
  about: { aboutYourself, aboutMore },
  project: {
    projectList, projectFirefox, projectGaia, projectMarketplaceApp,
    projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy, projectIMusic
  },
  resume: { resumeLink, resumeMore },
  contact: { contactMail },
  response, modal
}) {
  mapSectionToResponse(actions.SECTION_ABOUT_YOURSELF, aboutYourself);
  mapSectionToResponse(actions.SECTION_ABOUT_MORE, aboutMore);
  mapSectionToResponse(actions.SECTION_PROJECT_LIST, projectList);
  mapSectionToResponse(actions.SECTION_PROJECT_FIREFOX, projectFirefox);
  mapSectionToResponse(actions.SECTION_PROJECT_GAIA, projectGaia);
  mapSectionToResponse(actions.SECTION_PROJECT_MARKETPLACE_APP, projectMarketplaceApp);
  mapSectionToResponse(actions.SECTION_PROJECT_MUZIK_LIST, projectMuzikList);
  mapSectionToResponse(actions.SECTION_PROJECT_MUZIK_AIR, projectMuzikAir);
  mapSectionToResponse(actions.SECTION_PROJECT_MUZIK_ONLINE, projectMuzikOnline);
  mapSectionToResponse(actions.SECTION_PROJECT_MUZIK_STUDY, projectMuzikStudy);
  mapSectionToResponse(actions.SECTION_PROJECT_IMUSIC, projectIMusic);
  mapSectionToResponse(actions.SECTION_RESUME_LINK, resumeLink);
  mapSectionToResponse(actions.SECTION_RESUME_MORE, resumeMore);
  mapSectionToResponse(actions.SECTION_CONTACT_MAIL, contactMail);

  return {
    hello: mapSectionToMessages(helloWorld),
    about: mapSectionToMessages(aboutYourself, aboutMore),
    project: mapSectionToMessages(
      projectList, projectFirefox, projectGaia, projectMarketplaceApp,
      projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy, projectIMusic
    ),
    resume: mapSectionToMessages(resumeLink, resumeMore),
    contact: mapSectionToMessages(contactMail),
    response, modal
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { hello, about, project, resume, contact, response, modal } = stateProps;

  return {
    ...ownProps,
    hello, about, project, resume, contact,
    response: {
      messages: response.sections.map(section => {
        return {
          ...mapSectionToResponse(section),
          is_visible: true,
          onClick: e => {
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
