import React, { Component } from 'react';

import './Response.css';
import Message from './Message';

class Response extends Component {
  render() {
    const { response, onStartSection } = this.props;

    let classList = ['response'];
    let messages = null;

    if (response.is_visible) {
      classList = [...classList, 'response-visible'];
    }

    if (response.responses.length > 0) {
      messages = (
        <ul>{
          response.responses.map((response, index) => {
            return (
              <li key={ index }>
                <Message message={ response.message }
                         onClick={ onStartSection(response.section) } />
              </li>
            );
          })
        }</ul>
      );
    }

    return (
      <div className={ classList.join(' ') }>
        <div className="response-input">{ messages }</div>
      </div>
    );
  }
}

export default Response;
