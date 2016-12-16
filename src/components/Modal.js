import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Modal.css');
}

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      is_visible: PropTypes.bool.isRequired,
      is_image_visible: PropTypes.bool.isRequired,
      name: PropTypes.string,
      image_url: PropTypes.string
    }).isRequired
  }

  render() {
    const { modal } = this.props;
    let classList = ['modal'];
    let imageClassList = ['modal-image'];

    if (modal.is_visible) {
      classList = [...classList, 'modal-open'];
    }

    if (modal.is_image_visible) {
      imageClassList = [...imageClassList, 'modal-image-visible'];
    }

    return (
      <section className={ classList.join(' ') }
               onClick={ this.closeModal }>
        <img className={ imageClassList.join(' ') }
             onLoad={ this.onImageLoad }
             src={ modal.image_url }
             alt={ modal.name }
             title={ modal.name } />
      </section>
    );
  }
}

export default Modal;
