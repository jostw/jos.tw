import React, { Component } from 'react';

import './MessageList.css';
import Message from './Message';

class MessageList extends Component {
  render() {
    const { messages } = this.props;

    if (messages.length === 0) {
      return null;
    }

    return (
      <ul className="message-list">{
        messages.map((message, index) => {
          let classList = [`message-${message.type}`];

          if (message.is_typing || message.is_visible) {
            classList = [...classList, `message-${message.type}-visible`];
          }

          if (message.is_visible && (message.is_array || message.is_iframe)) {
            classList = [...classList, 'message-multiline'];
          }

          return (
            <li className={ classList.join(' ') } key={ index }>
              <Message message={ message } />
            </li>
          );
        })
      }</ul>
    );
  }
}

export default MessageList;
