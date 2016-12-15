import React, { Component, PropTypes } from 'react';

import './Footer.css';

class Footer extends Component {
  static propTypes = {
    footer: PropTypes.shape({
      is_visible: PropTypes.bool.isRequired
    }).isRequired
  }

  render() {
    const { footer } = this.props;

    let classList = ['footer'];

    if (footer.is_visible) {
      classList = [...classList, 'footer-visible'];
    }

    return (
      <footer className={ classList.join(' ') }>
        <span className="copyright">Copyright © 2017 Joseph Yeh</span>
      </footer>
    );
  }
}

export default Footer;
