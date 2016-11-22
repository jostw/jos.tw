import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MessageList from '../components/MessageList';
import Response from '../components/Response';

class App extends Component {
  componentDidMount() {
    this.props.actions.startHello();
  }

  render() {
    const { hello, about, response } = this.props;

    return (
      <div>
        <section>
          <MessageList messages={ hello } />
        </section>

        <section>
          <MessageList messages={ about } />
        </section>

        <Response response={ response } />
      </div>
    );
  }
}

function mapSectionToResponse(section, response) {
  switch (section) {
    case actions.SECTION_ABOUT:
      return response.about;
    default:
      return {};
  }
}

function mapStateToProps(state) {
  return {
    hello: state.hello,
    about: state.about,
    response: state.response
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { hello, about, response } = stateProps;

  return Object.assign({}, ownProps, {
    hello: hello.messages,
    about: [about.response, ...about.messages],
    response: {
      messages: response.sections.map(section => {
        const message = mapSectionToResponse(section, { about: about.response });

        return Object.assign({}, message, {
          onclick: e => {
            e.preventDefault();

            dispatchProps.actions.startSection(section);
          },
          is_visible: true
        });
      }),
      is_visible: response.is_visible
    },
    actions: dispatchProps.actions
  });
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
