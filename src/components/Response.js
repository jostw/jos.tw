import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Response.css');
}

import Message from './Message';

class Response extends Component {
  static propTypes = {
    response: PropTypes.shape({
      messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
      is_visible: PropTypes.bool.isRequired
    }).isRequired
  }

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
