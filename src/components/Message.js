import React, { Component } from 'react';

import './Message.css';

class Message extends Component {
  render() {
    const { message, onClick } = this.props;

    let classList = ['message'];
    let content;

    if (message.is_typing) {
      classList = [...classList, 'message-typing'];
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
      classList = [...classList, 'message-visible'];
    }

    if (onClick) {
      return (
        <a href="#"
           className={ classList.join(' ') }
           onClick={ onClick }
           title={ message.content }>{ content }</a>
      );
    }

    return (
      <div className={ classList.join(' ') }>{ content }</div>
    );
  }
}

export default Message;
