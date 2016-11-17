import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MessageList from '../components/MessageList';
import Response from '../components/Response';

class App extends Component {
  constructor() {
    super();

    this.onStartAbout = this.onStartAbout.bind(this);
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
                  message={ about.response }
                  onClick={ this.onStartAbout } />
      </div>
    );
  }

  onStartAbout(e) {
    e.preventDefault();

    this.props.actions.startAbout();
  }
}

const mapStateToProps = state => {
  return {
    hello: state.hello,
    about: state.about,
    response: state.response
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
