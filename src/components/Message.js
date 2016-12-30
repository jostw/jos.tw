import React, { Component, PropTypes } from 'react';

import Link from './Link';
import Item from './Item';

if (!process.env.SERVER) {
  require('./Message.css');
}

class Message extends Component {
  static propTypes = {
    ...Link.propTypes,
    ...Item.propTypes,
    type: PropTypes.oneOf(['client', 'server']).isRequired,
    content: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      image_url: PropTypes.string,
      content: PropTypes.string.isRequired
    })),
    is_typing: PropTypes.bool,
    is_visible: PropTypes.bool,
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

    if (nextProps.projects && nextProps.is_typing) {
      nextProps.projects.forEach(project => {
        if (project.image_url) {
          const projectName = this.getLowerCaseProjectName(project);
          const imageUrl = this.getProjectImageUrl(project);

          this.setState({ [projectName]: imageUrl });
        }
      });
    }
  }

  render() {
    const { projects, onClick } = this.props;

    let classList = ['message'];
    let message = null;

    if (this.props.is_visible) {
      classList = [...classList, 'message-visible'];
    }

    if (projects) {
      const { openImage } = this.props;

      classList = [...classList, 'message-fullscreen'];

      message = (
        <ul className="message-projects">{
          projects.map((project, index) => {
            let projectClassList = ['message-text', 'message-project'];
            let projectContent = null;

            const projectName = this.getLowerCaseProjectName(project);

            if (project.image_url) {
              const imageUrl = this.getProjectImageUrl(project);

              projectContent = (
                <Link { ...project }
                      className="message-project-image"
                      onClick={ openImage(project.content, imageUrl) }>
                  <img src={ this.state[projectName] }
                       alt={ project.content }
                       title={ project.content } />
                </Link>
              );
            } else {
              if (this.props.is_typing || this.props.is_visible) {
                projectClassList = [
                  ...projectClassList,
                  `message-project-${projectName}`
                ];
              }

              if (project.link) {
                projectContent = (
                  <Link { ...project }
                        className="message-project-name message-project-link" />
                );
              } else {
                projectContent = (
                  <span className="message-project-name">{ project.content }</span>
                );
              }
            }

            return (
              <li className={ projectClassList.join(' ') }
                  key={ `message-project-${index}` }>{ projectContent }</li>
            );
          })
        }</ul>
      );
    } else if (this.props.is_iframe) {
      classList = [...classList, 'message-fullscreen'];

      message = (
        <iframe className="message-iframe"
                src={ this.state.iframe_src }></iframe>
      );
    } else {
      message = (
        <Item { ...this.props }
              className="message-text" />
      );
    }

    if (onClick) {
      return (
        <Link { ...this.props }
              classList={ classList }>{ message }</Link>
      );
    }

    return (
      <div className={ classList.join(' ') }>{ message }</div>
    );
  }

  getLowerCaseProjectName(project) {
    return project.content.split(' ').join('-').toLowerCase();
  }

  getProjectImageUrl(project) {
    return `img/${project.image_url}`;
  }
}

export default Message;
