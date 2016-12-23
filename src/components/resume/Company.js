import React, { Component } from 'react';

import Period from './Period';

class Company extends Component {
  render() {
    const { company } = this.props;

    let content = null;

    if (company.item.has_html) {
      content = (
        <div dangerouslySetInnerHTML={{ __html: company.item.content }} />
      );
    } else {
      content = (
        <div>{ company.item.content }</div>
      );
    }

    return (
      <div className="company">
        <h3 className="section-name">{ company.name }</h3>
        <div className="section-title">{ company.title }</div>
        <Period period={ company.period } />
        { content }
      </div>
    );
  }
}

export default Company;
