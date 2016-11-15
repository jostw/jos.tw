import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <MessageList messages={ this.props.helloMessages } />
        </section>

        <section>
          <MessageList messages={ this.props.aboutMessages } />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    helloMessages: state.helloMessages,
    aboutMessages: state.aboutMessages
  };
};

export default connect(mapStateToProps)(App);
