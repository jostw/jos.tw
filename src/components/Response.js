import React, { Component } from 'react';

import './Response.css';
import Message from './Message';

class Response extends Component {
  render() {
    const { response } = this.props;

    let classList = ['response'];
    let messages = null;

    if (response.is_visible) {
      classList = [...classList, 'response-visible'];
    }

    if (response.messages.length > 0) {
      messages = (
        <ul>{
          response.messages.map((message, index) => {
            return (
              <li key={ index }>
                <Message message={ message } />
              </li>
            );
          })
        }</ul>
      );
    }

    return (
      <section className={ classList.join(' ') }>
        <div className="response-input">{ messages }</div>
      </section>
    );
  }
}

export default Response;
