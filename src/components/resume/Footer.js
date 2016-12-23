import React, { Component } from 'react';

import List from './List';

class Footer extends Component {
  render() {
    const { footer } = this.props;

    return (
      <footer className="footer hide-from-print">
        <div className="container">
          <span className="footer-copyright">{ footer.copyright }</span>
          <List links={ footer.links } />
        </div>
      </footer>
    );
  }
}

export default Footer;
