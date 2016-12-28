import React, { Component, PropTypes } from 'react';

import List from '../../containers/resume/List';

class Footer extends Component {
  static propTypes = {
    footer: PropTypes.shape({
      copyright: PropTypes.string.isRequired,
      links: List.propTypes.links.isRequired
    }).isRequired
  }

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
