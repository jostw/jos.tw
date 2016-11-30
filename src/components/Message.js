import React, { Component } from 'react';

import './Message.css';

class Message extends Component {
  render() {
    const { message } = this.props;

    let classList = ['message'];
    let content;

    if (message.is_visible) {
      classList = [...classList, 'message-visible'];
    }

    if (message.is_array) {
      content = (
        <ul>{
          message.content.map((item, index) => {
            return (
              <li className="text" key={ index }>{ item }</li>
            );
          })
        }</ul>
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

    if (message.onclick) {
      return (
        <a href="#"
           className={ classList.join(' ') }
           onClick={ message.onclick }
           title={ message.content }>{ content }</a>
      );
    }

    return (
      <div className={ classList.join(' ') }>{ content }</div>
    );
  }
}

export default Message;
