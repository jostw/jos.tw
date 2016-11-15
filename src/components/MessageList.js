import React, { Component } from 'react';
import Message from './Message';
import './MessageList.css';

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
