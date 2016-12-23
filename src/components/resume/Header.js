import React, { Component } from 'react';

import List from './List';

class Header extends Component {
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
