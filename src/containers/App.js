import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

class App extends Component {
  render() {
    return (
      <section>
        <MessageList messages={ this.props.aboutMessages } />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { aboutMessages: state.aboutMessages };
};

export default connect(mapStateToProps)(App);
