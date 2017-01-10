import React, { Component, PropTypes } from 'react';

class Item extends Component {
  static propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    has_html: PropTypes.bool
  }

  render() {
    const { className, content } = this.props;

    if (this.props.has_html) {
      return (
        <span className={ className }
             dangerouslySetInnerHTML={{ __html: content }} />
      );
    }

    return (
      <span className={ className }>{ content }</span>
    );
  }
}

export default Item;
