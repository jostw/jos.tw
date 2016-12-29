import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Response.css');
}

import Message from './Message';

class Response extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
    is_visible: PropTypes.bool.isRequired
  }

  render() {
    let classList = ['response'];
    let messages = null;

    if (this.props.is_visible) {
      classList = [...classList, 'response-visible'];
    }

    if (this.props.messages.length > 0) {
      messages = (
        <ul>{
          this.props.messages.map((message, index) => {
            return (
              <li key={ `response-message-${index}` }>
                <Message { ...message } />
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
