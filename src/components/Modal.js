import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Modal.css');
}

class Modal extends Component {
  static propTypes = {
    is_visible: PropTypes.bool.isRequired,
    is_image_visible: PropTypes.bool.isRequired,
    name: PropTypes.string,
    image_url: PropTypes.string
  }

  render() {
    let classList = ['modal'];
    let imageClassList = ['modal-image'];

    if (this.props.is_visible) {
      classList = [...classList, 'modal-open'];
    }

    if (this.props.is_image_visible) {
      imageClassList = [...imageClassList, 'modal-image-visible'];
    }

    return (
      <section className={ classList.join(' ') }
               onClick={ this.closeModal }>
        <img className={ imageClassList.join(' ') }
             onLoad={ this.onImageLoad }
             src={ this.props.image_url }
             alt={ this.props.name }
             title={ this.props.name } />
      </section>
    );
  }
}

export default Modal;
