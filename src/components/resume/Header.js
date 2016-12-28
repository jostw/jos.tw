import React, { Component, PropTypes } from 'react';

import List from './List';

class Header extends Component {
  static propTypes = {
    header: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      links: List.propTypes.links.isRequired,
      items: List.propTypes.items.isRequired,
    }).isRequired
  }

  render() {
    const { header } = this.props;

    return (
      <header className="header">
        <div className="container">
          <h1 className="header-title">{ header.name }</h1>
          <h2 className="header-subtitle">{ header.title }</h2>
          <div className="header-contact">
            <List links={ header.links }
                  items={ header.items } />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
