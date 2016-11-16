import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MessageList from '../components/MessageList';

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.startHello();
  }

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

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
