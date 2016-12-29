import React, { Component, PropTypes } from 'react';

import List from '../../containers/resume/List';

class Header extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: List.propTypes.links.isRequired,
    items: List.propTypes.items.isRequired,
  }

  render() {
    const { name, title, links, items } = this.props;

    return (
      <header className="header">
        <div className="container">
          <h1 className="header-title">{ name }</h1>
          <h2 className="header-subtitle">{ title }</h2>
          <div className="header-contact">
            <List links={ links }
                  items={ items } />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
