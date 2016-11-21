import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MessageList from '../components/MessageList';
import Response from '../components/Response';

class App extends Component {
  constructor() {
    super();

    this.onStartSection = this.onStartSection.bind(this);
  }

  componentDidMount() {
    this.props.actions.startHello();
  }

  render() {
    const { hello, about, response } = this.props;

    return (
      <div>
        <section>
          <MessageList messages={ hello.messages } />
        </section>

        <section>
          <MessageList messages={ about.messages } />
        </section>

        <Response response={ response }
                  onStartSection={ this.onStartSection } />
      </div>
    );
  }

  onStartSection(section) {
    return e => {
      e.preventDefault();

      this.props.actions.startSection(section);
    };
  }
}

const mapSectionToResponse = (section, state) => {
  switch (section) {
    case actions.SECTION_ABOUT:
      return state.about.response;
    default:
      return {};
  }
};

const mapStateToProps = state => {
  return {
    hello: state.hello,
    about: state.about,
    response: {
      responses: state.response.sections.map(section => {
        return {
          section,
          message: mapSectionToResponse(section, state)
        };
      }),
      is_visible: state.response.is_visible
    }
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
