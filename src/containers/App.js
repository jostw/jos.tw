import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

class App extends Component {
  render() {
    return (
      <MessageList messages={ this.props.messages } />
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

export default connect(mapStateToProps)(App);
