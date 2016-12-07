import React, { Component } from 'react';

import MessageList from '../components/MessageList';

class Section extends Component {
  constructor(props) {
    super(props);

    this.openImage = this.openImage.bind(this);
  }

  render() {
    const { section } = this.props;

    if (section.length === 0) {
      return null;
    }

    return (
      <section>{
        section.map((subSectionMessages, index) => {
          return (
            <MessageList key={ index }
                         openImage={ this.openImage }
                         messages={ subSectionMessages } />
          );
        })
      }</section>
    );
  }

  openImage(name, imageUrl) {
    const { toggleModal } = this;

    return e => {
      e.preventDefault();

      toggleModal(name, imageUrl.replace('-640x360', ''));
    };
  }
}

export default Section;
