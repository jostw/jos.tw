import React, { Component } from 'react';
import './MessageList.css';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">{
        this.props.messages.map((message, index) => {
          const classList = [`message-${message.type}`];

          if (message.is_typing || message.is_visible) {
            classList.push(`message-${message.type}-visible`);
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
