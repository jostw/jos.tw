import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
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
