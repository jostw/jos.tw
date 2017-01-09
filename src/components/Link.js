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
    const { className, classList, link, onClick, title, content, children } = this.props;

    let props = {
      className: className || (classList && classList.join(' ')),
      title: title || content
    };

    if (onClick) {
      if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        props = {
          ...props,
          href: '#',
          onTouchStart: e => {
            e.preventDefault();

            onClick();
          }
        };
      } else {
        props = {
          ...props,
          href: '#',
          onClick: e => {
            e.preventDefault();

            onClick();
          }
        };
      }
    } else {
      props = {
        ...props,
        href: link || content,
      };

      if (!props.href.match(/mailto|javascript/)) {
        props = {
          ...props,
          target: '_blank'
        };
      }
    }

    return (
      <a { ...props }>{ children || content }</a>
    );
  }
}

export default Link;
