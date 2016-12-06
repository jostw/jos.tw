import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  render() {
    const { modal } = this.props;
    let classList = ['modal'];

    if (modal.is_visible) {
      classList = [...classList, 'modal-open'];
    }

    return (
      <section className={ classList.join(' ') }
               onClick={ this.closeModal }>
        <img className="modal-image"
             src={ modal.image_url }
             alt={ modal.name }
             title={ modal.name } />
      </section>
    );
  }
}

export default Modal;
