import React, { Component, PropTypes } from 'react';

class Label extends Component {
  static propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    has_html: PropTypes.bool
  }

  render() {
    const { className, content } = this.props;

    let classList = ['label'];

    if (className) {
      classList = [...classList, `label-${className}`];
    }

    if (this.props.has_html) {
      return (
        <h6 className={ classList.join(' ') }
            dangerouslySetInnerHTML={{ __html: content }} />
      );
    }

    return (
      <h6 className={ classList.join(' ') }>{ content }</h6>
    );
  }
}

export default Label;
