import React, { Component } from 'react';
import './MessageList.css';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list"> {
        this.props.messages.map((message, index) => {
          return (
            <li className={ `message-${message.type}` } key={ index }>
              <Message>{ message.content }</Message>
            </li>
          );
        })
      }</ul>
    );
  }
}

export default MessageList;
