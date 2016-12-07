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
            let projectClassList = ['text', 'project'];

            if (!message.is_image_array) {
              projectClassList = [...projectClassList, item.split(' ').join('-').toLowerCase()];
            }

            return (
              <li className={ projectClassList.join(' ') } key={ index }>{
                message.is_image_array ? (
                  <a href="#"
                     className="image"
                     onClick={ message.openImage(item.name, item.image_url) }
                     title={ item.name }>
                    <img src={ item.image_url }
                         alt={ item.name }
                         title={ item.name } />
                  </a>
                ) : (
                  <span className="name">{ item }</span>
                )
              }</li>
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
