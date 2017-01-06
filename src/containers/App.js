import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Section from './Section';
import Response from '../components/Response';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

class App extends Component {
  static propTypes = {
    hello: Section.propTypes.section,
    about: Section.propTypes.section,
    project: Section.propTypes.section,
    resume: Section.propTypes.section,
    contact: Section.propTypes.section,
    response: PropTypes.shape(Response.propTypes).isRequired,
    footer: PropTypes.shape(Footer.propTypes).isRequired,
    modal: PropTypes.shape(Modal.propTypes).isRequired
  }

  constructor(props) {
    super(props);

    this.state = { requestAnimationFrameID: null };

    this.scrollToEnd = this.scrollToEnd.bind(this);

    Section.prototype.toggleModal = props.actions.toggleModal;
    Modal.prototype.onImageLoad = props.actions.showModalImage;
    Modal.prototype.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.actions.startSection();
  }

  componentDidUpdate() {
    const isScrolling = document.body.classList.contains('overflow-hidden');
    const { requestAnimationFrameID } = this.state;

    if (isScrolling && !requestAnimationFrameID) {
      this.startScrolling();
    }

    if (!isScrolling && requestAnimationFrameID) {
      this.stopScrolling();
    }
  }

  render() {
    const { hello, about, project, resume, contact, response, footer, modal } = this.props;

    return (
      <div className="app">
        <Section section={ hello } />
        <Section section={ about } />
        <Section section={ project } />
        <Section section={ resume } />
        <Section section={ contact } />
        <Response { ...response } />
        <Footer { ...footer } />
        <Modal { ...modal } />
      </div>
    );
  }

  scrollToEnd() {
    const { body } = document;

    if (body.scrollTop !== body.scrollHeight) {
      body.scrollTop = body.scrollHeight;
    }

    this.startScrolling();
  }

  startScrolling() {
    this.setState({
      requestAnimationFrameID: requestAnimationFrame(this.scrollToEnd)
    });
  }

  stopScrolling() {
    cancelAnimationFrame(this.state.requestAnimationFrameID);

    this.setState({
      requestAnimationFrameID: null
    });
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
  hello: { helloWorld, helloAgain },
  about: { aboutYourself, aboutMore },
  project: {
    projectList, projectFirefox, projectGaia, projectMarketplaceApp,
    projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy, projectIMusic
  },
  resume: { resumeLink, resumeMore },
  contact: { contactMail, contactGoodbye },
  response, footer, modal
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
  mapSectionToResponse(actions.SECTION_CONTACT_GOODBYE, contactGoodbye);

  return {
    hello: mapSectionToMessages(helloWorld, helloAgain),
    about: mapSectionToMessages(aboutYourself, aboutMore),
    project: mapSectionToMessages(
      projectList, projectFirefox, projectGaia, projectMarketplaceApp,
      projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy, projectIMusic
    ),
    resume: mapSectionToMessages(resumeLink, resumeMore),
    contact: mapSectionToMessages(contactMail, contactGoodbye),
    response, footer, modal
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { hello, about, project, resume, contact, response, footer, modal } = stateProps;

  return {
    ...ownProps,
    hello, about, project, resume, contact,
    response: {
      messages: response.sections.map(section => {
        return {
          ...mapSectionToResponse(section),
          is_visible: true,
          onClick: () => {
            dispatchProps.actions.startSection(section);
          }
        };
      }),
      is_visible: response.is_visible
    },
    footer, modal,
    actions: dispatchProps.actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
