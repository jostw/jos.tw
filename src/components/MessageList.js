import React, { Component } from 'react';
import './MessageList.css';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        <li>
          <Message>{ 'Hello World!' }</Message>
        </li>
      </ul>
    );
  }
}

export default MessageList;
