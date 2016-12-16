import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./MessageList.css');
}

import Message from './Message';

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    openImage: PropTypes.func.isRequired
  }

  render() {
    const { messages, openImage } = this.props;

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

          if (message.is_visible && message.is_array) {
            if (message.content.length === 3) {
              classList = [...classList, 'message-array-three'];
            }

            if (message.content.length === 4) {
              classList = [...classList, 'message-array-four'];
            }
          }

          return (
            <li className={ classList.join(' ') } key={ index }>
              <Message message={ message }
                       openImage={ openImage } />
            </li>
          );
        })
      }</ul>
    );
  }
}

export default MessageList;
