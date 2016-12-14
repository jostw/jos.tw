import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Section from './Section';
import Response from '../components/Response';
import Modal from '../components/Modal';

class App extends Component {
  static propTypes = {
    hello: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    about: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    project: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    resume: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    contact: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    response: PropTypes.object.isRequired,
    modal: PropTypes.object.isRequired
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
    const { app } = this.props;
    const { requestAnimationFrameID } = this.state;

    if (app.is_scrolling && !requestAnimationFrameID) {
      this.startScrolling();
    }

    if (!app.is_scrolling && requestAnimationFrameID) {
      this.stopScrolling();
    }
  }

  render() {
    const { app, hello, about, project, resume, contact, response, modal } = this.props;

    let classList = ['app'];

    if (app.is_scrolling) {
      classList = [...classList, 'app-hidden'];
    }

    return (
      <div className={ classList.join(' ') } ref="app">
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

  scrollToEnd() {
    const { app } = this.refs;

    if (app.scrollTop !== app.scrollHeight) {
      app.scrollTop = app.scrollHeight;
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
    this.setState({ requestAnimationFrameID: null });
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
  app,
  hello: { helloWorld, helloAgain },
  about: { aboutYourself, aboutMore },
  project: {
    projectList, projectFirefox, projectGaia, projectMarketplaceApp,
    projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy, projectIMusic
  },
  resume: { resumeLink, resumeMore },
  contact: { contactMail, contactGoodbye },
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
  mapSectionToResponse(actions.SECTION_CONTACT_GOODBYE, contactGoodbye);

  return {
    app,
    hello: mapSectionToMessages(helloWorld, helloAgain),
    about: mapSectionToMessages(aboutYourself, aboutMore),
    project: mapSectionToMessages(
      projectList, projectFirefox, projectGaia, projectMarketplaceApp,
      projectMuzikList, projectMuzikAir, projectMuzikOnline, projectMuzikStudy, projectIMusic
    ),
    resume: mapSectionToMessages(resumeLink, resumeMore),
    contact: mapSectionToMessages(contactMail, contactGoodbye),
    response, modal
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { app, hello, about, project, resume, contact, response, modal } = stateProps;

  return {
    ...ownProps,
    app, hello, about, project, resume, contact,
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
