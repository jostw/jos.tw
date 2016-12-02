import React, { Component } from 'react';

import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = { iframe_src: null };
  }

  componentWillReceiveProps(nextProps) {
    const { message } = nextProps;

    if (message.is_iframe && message.is_typing) {
      this.setState({ iframe_src: message.content });
    }
  }

  render() {
    const { message } = this.props;

    let classList = ['message'];
    let content;

    if (message.is_visible) {
      classList = [...classList, 'message-visible'];
    }

    if (message.is_array) {
      classList = [...classList, 'message-fullscreen'];
      content = (
        <ul className="projects">{
          message.content.map((item, index) => {
            const classList = ['text', 'project', item.split(' ').join('-').toLowerCase()];
            return (
              <li className={ classList.join(' ') } key={ index }>
                <span className="name">{ item }</span>
              </li>
            );
          })
        }</ul>
      );
    } else if (message.is_iframe) {
      classList = [...classList, 'message-fullscreen'];
      content = (
        <iframe src={ this.state.iframe_src }></iframe>
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
