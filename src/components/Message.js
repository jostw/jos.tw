import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    if (this.props.hasHTML) {
      return (
        <span className="message"
              dangerouslySetInnerHTML={{ __html: this.props.children }}></span>
      );
    }

    return (
      <span className="message">{ this.props.children }</span>
    );
  }
}

export default Message;
