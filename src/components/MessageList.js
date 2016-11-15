import React, { Component } from 'react';
import './MessageList.css';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        <li className="message-left">
          <Message>{ 'Hello World!' }</Message>
        </li>
        <li className="message-left">
          <Message>{ 'Hello World!' }</Message>
        </li>
        <li className="message-right">
          <Message>{ 'Hello World!' }</Message>
        </li>
        <li className="message-right">
          <Message>{ 'Hello World!' }</Message>
        </li>
        <li className="message-left">
          <Message>{ 'Hello World!' }</Message>
        </li>
      </ul>
    );
  }
}

export default MessageList;
