import React, { Component, PropTypes } from 'react';

import Message from './Message';

if (!process.env.SERVER) {
  require('./Response.css');
}

class Response extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
    is_visible: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { is_visible: false };
  }

  componentDidUpdate() {
    if (this.props.is_visible !== this.state.is_visible) {
      setTimeout(() => {
        this.setState({ is_visible: this.props.is_visible });
      }, 0);
    }
  }

  render() {
    const { messages } = this.props;

    let classList = ['response'];
    let responses = null;

    if (this.state.is_visible) {
      classList = [...classList, 'response-visible'];
    }

    if (messages.length > 0) {
      responses = (
        <ul>{
          messages.map((message, index) => {
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
        <div className="response-input">{ responses }</div>
      </section>
    );
  }
}

export default Response;
