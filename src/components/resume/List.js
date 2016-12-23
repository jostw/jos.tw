import React, { Component } from 'react';

import Link from '../Link';

class List extends Component {
  render() {
    let list = [];

    if (this.props.links) {
      list = [
        ...list,
        this.props.links.map((link, index) => {
          return (
            <li className="item" key={ `link-${index}` }>
              <Link { ...link } />
            </li>
          );
        })
      ];
    }

    if (this.props.items) {
      list = [
        ...list,
        this.props.items.map((item, index) => {
          let classList = ['item'];
          let content = null;

          if (item.hide_from_print) {
            classList = [...classList, 'hide-from-print'];
          }

          if (item.has_html) {
            content = (
              <span className={ item.className }
                    dangerouslySetInnerHTML={{ __html: item.content }} />
            );
          } else {
            content = (
              <span className={ item.className }>{ item.content }</span>
            );
          }

          return (
            <li className={ classList.join(' ') } key={ `item-${index}` }>{ content }</li>
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
