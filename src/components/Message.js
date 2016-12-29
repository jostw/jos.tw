import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Message.css');
}

import Link from './Link';
import Item from './Item';

class Message extends Component {
  static propTypes = {
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
    is_iframe: PropTypes.bool,
    openImage: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = { iframe_src: null };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.is_iframe && nextProps.is_typing) {
      this.setState({ iframe_src: nextProps.content });
    }
  }

  render() {
    let classList = ['message'];
    let content;

    if (this.props.is_visible) {
      classList = [...classList, 'message-visible'];
    }

    if (this.props.is_array) {
      const { openImage } = this.props;

      classList = [...classList, 'message-fullscreen'];

      content = (
        <ul className="message-projects">{
          this.props.content.map((item, index) => {
            let projectClassList = ['message-text', 'message-project'];

            if (!this.props.is_image_array) {
              projectClassList = [
                ...projectClassList,
                `message-project-${item.name.split(' ').join('-').toLowerCase()}`
              ];
            }

            return (
              <li className={ projectClassList.join(' ') } key={ `message-project-${index}` }>{
                this.props.is_image_array ? (
                  <Link className="message-project-image"
                        onClick={ openImage(item.name, item.image_url) }
                        title={ item.name }>
                    <img src={ item.image_url }
                         alt={ item.name }
                         title={ item.name } />
                  </Link>
                ) : item.url ? (
                  <Link className="message-project-name message-project-link"
                        link={ item.url }
                        content={ item.name } />
                ) : (
                  <span className="message-project-name">{ item.name }</span>
                )
              }</li>
            );
          })
        }</ul>
      );
    } else if (this.props.is_iframe) {
      classList = [...classList, 'message-fullscreen'];

      content = (
        <iframe className="message-iframe"
                src={ this.state.iframe_src }></iframe>
      );
    } else {
      content = (
        <Item { ...this.props }
              className="message-text" />
      );
    }

    if (this.props.onClick) {
      return (
        <Link { ...this.props }
              classList={ classList }>{ content }</Link>
      );
    }

    return (
      <div className={ classList.join(' ') }>{ content }</div>
    );
  }
}

export default Message;
