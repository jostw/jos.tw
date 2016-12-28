import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Message.css');
}

import Link from './Link';
import Item from './resume/Item';

class Message extends Component {
  static propTypes = {
    message: PropTypes.shape({
      ...Link.propTypes,
      ...Item.propTypes,
      type: PropTypes.oneOf(['client', 'server']).isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          image_url: PropTypes.string,
          url: PropTypes.string
        }))
      ]).isRequired,
      is_typing: PropTypes.bool,
      is_visible: PropTypes.bool,
      is_array: PropTypes.bool,
      is_image_array: PropTypes.bool,
      is_iframe: PropTypes.bool
    }).isRequired,
    openImage: PropTypes.func
  }

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
      const { openImage } = this.props;

      classList = [...classList, 'message-fullscreen'];

      content = (
        <ul className="projects">{
          message.content.map((item, index) => {
            let projectClassList = ['text', 'project'];

            if (!message.is_image_array) {
              projectClassList = [...projectClassList, item.name.split(' ').join('-').toLowerCase()];
            }

            return (
              <li className={ projectClassList.join(' ') } key={ index }>{
                message.is_image_array ? (
                  <Link className="image"
                        onClick={ openImage(item.name, item.image_url) }
                        title={ item.name }>
                    <img src={ item.image_url }
                         alt={ item.name }
                         title={ item.name } />
                  </Link>
                ) : item.url ? (
                  <Link className="name project-link"
                        link={ item.url }
                        content={ item.name } />
                ) : (
                  <span className="name">{ item.name }</span>
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
    } else {
      content = (
        <Item { ...message }
              className="text" />
      );
    }

    if (message.onClick) {
      return (
        <Link { ...message }
              classList={ classList }>{ content }</Link>
      );
    }

    return (
      <div className={ classList.join(' ') }>{ content }</div>
    );
  }
}

export default Message;
