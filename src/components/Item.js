import React, { Component, PropTypes } from 'react';

class Item extends Component {
  static propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    has_html: PropTypes.bool,
    hide_from_print: PropTypes.bool
  }

  render() {
    const { className, content } = this.props;

    if (this.props.has_html) {
      return (
        <div className={ className }
             dangerouslySetInnerHTML={{ __html: content }} />
      );
    }

    return (
      <div className={ className }>{ content }</div>
    );
  }
}

export default Item;
