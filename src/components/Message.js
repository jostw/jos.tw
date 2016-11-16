import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    const { message } = this.props;

    let classList = ['message'];
    let content;

    if (message.is_typing) {
      classList.push('message-typing');

      content = (
        <span className="text ellipsis"></span>
      );
    } else if (message.has_html) {
      content = (
        <span className="text"
              dangerouslySetInnerHTML={{ __html: message.content }}></span>
      );
    } else {
      content = (
        <span className="text">{ message.content }</span>
      );
    }

    if (message.is_visible) {
      classList.push('message-visible');
    }

    return (
      <div className={ classList.join(' ') }>{ content }</div>
    );
  }
}

export default Message;
