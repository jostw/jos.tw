import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Section from '../components/Section';
import Response from '../components/Response';

class App extends Component {
  componentDidMount() {
    this.props.actions.startHello();
  }

  render() {
    const { hello, about, response } = this.props;

    return (
      <div>
        <Section section={ hello } />
        <Section section={ about } />
        <Response response={ response } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { hello, about, response } = state;

  return {
    hello: [hello.hello],
    about: [about.aboutYourself],
    response: response,
    responseMap: {
      [actions.SECTION_ABOUT_YOURSELF]: about.aboutYourself.response
    }
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { hello, about, response, responseMap } = stateProps;

  return Object.assign({}, ownProps, {
    hello: hello.map(subSection => subSection.messages),
    about: about.map(subSection => [subSection.response, ...subSection.messages]),
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
