import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./Footer.css');
}

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired,
    is_visible: PropTypes.bool.isRequired
  }

  render() {
    const { copyright } = this.props;

    let classList = ['footer'];

    if (this.props.is_visible) {
      classList = [...classList, 'footer-visible'];
    }

    return (
      <footer className={ classList.join(' ') }>
        <span className="footer-copyright">{ copyright }</span>
      </footer>
    );
  }
}

export default Footer;
