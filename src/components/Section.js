import React, { Component } from 'react';

import MessageList from './MessageList';

class Section extends Component {
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
                         messages={ subSectionMessages } />
          );
        })
      }</section>
    );
  }
}

export default Section;
