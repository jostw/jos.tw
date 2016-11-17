import React, { Component } from 'react';

import './Response.css';
import Message from './Message';

class Response extends Component {
  render() {
    const { response, message, onClick } = this.props;

    let classList = ['response'];

    if (response.is_visible) {
      classList = [...classList, 'response-visible'];
    }

    return (
      <div className={ classList.join(' ') }>
        <div className="response-input">
          <Message message={ message }
                   onClick={ onClick } />
        </div>
      </div>
    );
  }
}

export default Response;
