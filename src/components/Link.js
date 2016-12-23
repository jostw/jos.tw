import React, { Component } from 'react';

class Link extends Component {
  render() {
    let props = {
      className: this.props.className || this.props.classList && this.props.classList.join(' '),
      title: this.props.title || this.props.content
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
        href: this.props.link || this.props.content,
      };

      if (!props.href.match(/mailto|javascript/)) {
        props = {
          ...props,
          target: '_blank'
        };
      }
    }

    return (
      <a { ...props }>{ this.props.content }</a>
    );
  }
}

export default Link;
