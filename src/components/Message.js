import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Message.css');
}

class Message extends Component {
  static propTypes = {
    message: PropTypes.shape({
      type: PropTypes.oneOf(['client', 'server']).isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.object)]).isRequired,
      onClick: PropTypes.func,
      has_html: PropTypes.bool,
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
                  <a href="#"
                     className="image"
                     onClick={ openImage(item.name, item.image_url) }
                     title={ item.name }>
                    <img src={ item.image_url }
                         alt={ item.name }
                         title={ item.name } />
                  </a>
                ) : item.url ? (
                  <a href={ item.url }
                     className="name project-link"
                     target="_blank"
                     title={ item.name }>{ item.name }</a>
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

    if (message.onClick) {
      return (
        <a href="#"
           className={ classList.join(' ') }
           onClick={ message.onClick }
           title={ message.content }>{ content }</a>
      );
    }

    return (
      <div className={ classList.join(' ') }>{ content }</div>
    );
  }
}

export default Message;
