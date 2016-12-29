import React, { Component, PropTypes } from 'react';

import MessageList from '../components/MessageList';

class Section extends Component {
  static propTypes = {
    section: PropTypes.arrayOf(MessageList.propTypes.messages).isRequired
  }

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
            <MessageList messages={ subSectionMessages }
                         openImage={ this.openImage }
                         key={ `message-list-${index}` } />
          );
        })
      }</section>
    );
  }

  openImage(imageName, imageUrl) {
    const { toggleModal } = this;

    return () => {
      toggleModal(imageName, imageUrl.replace(/-640x(360|313)/, ''));
    };
  }
}

export default Section;
