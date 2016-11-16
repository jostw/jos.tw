import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    const { message } = this.props;

    let className = ['message'];
    let content;

    if (message.is_typing) {
      className.push('message-typing');

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

    return (
      <div className={ className.join(' ') }>{ content }</div>
    );
  }
}

export default Message;
