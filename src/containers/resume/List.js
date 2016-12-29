import React, { Component, PropTypes } from 'react';

import Link from '../../components/Link';
import Item from '../../components/Item';

class List extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
    items: PropTypes.arrayOf(PropTypes.shape({
      ...Item.propTypes,
      hide_from_print: PropTypes.bool
    }))
  }

  render() {
    const { links, items } = this.props;

    let list = [];

    if (links) {
      list = [
        ...list,
        links.map((link, index) => {
          return (
            <li className="item" key={ `link-${index}` }>
              <Link { ...link } />
            </li>
          );
        })
      ];
    }

    if (items) {
      list = [
        ...list,
        items.map((item, index) => {
          let classList = ['item'];

          if (item.hide_from_print) {
            classList = [...classList, 'hide-from-print'];
          }

          return (
            <li className={ classList.join(' ') } key={ `item-${index}` }>
              <Item { ...item } />
            </li>
          );
        })
      ];
    }

    return (
      <ul className="list">{ list }</ul>
    );
  }
}

export default List;
