import React, { Component, PropTypes } from 'react';

class Link extends Component {
  static propTypes = {
    className: PropTypes.string,
    classList: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    content: PropTypes.string,
  }

  render() {
    const { content } = this.props;

    let props = {
      className: this.props.className || this.props.classList && this.props.classList.join(' '),
      title: this.props.title || content
    };

    if (this.props.onClick) {
      props = {
        ...props,
        href: '#',
        onClick: e => {
          e.preventDefault();

          this.props.onClick();
        }
      };
    } else {
      props = {
        ...props,
        href: this.props.link || content,
      };

      if (!props.href.match(/mailto|javascript/)) {
        props = {
          ...props,
          target: '_blank'
        };
      }
    }

    return (
      <a { ...props }>{ content }</a>
    );
  }
}

export default Link;
