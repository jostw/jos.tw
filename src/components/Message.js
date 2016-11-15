import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <span className="message">{ this.props.children }</span>
    );
  }
}

export default Message;
