import React, { Component, PropTypes } from 'react';

import List from '../../containers/resume/List';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired,
    links: List.propTypes.links.isRequired
  }

  render() {
    const { copyright, links } = this.props;

    return (
      <footer className="footer hide-from-print">
        <div className="container">
          <span className="footer-copyright">{ copyright }</span>
          <List links={ links } />
        </div>
      </footer>
    );
  }
}

export default Footer;
