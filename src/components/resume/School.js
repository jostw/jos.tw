import React, { Component } from 'react';

import Period from './Period';
import List from './List';

class School extends Component {
  render() {
    const { school } = this.props;

    let classList = ['school'];
    let gpaClassList = ['school-gpa'];
    let lab = null;

    if (school.hide_from_print) {
      classList = [...classList, 'hide-from-print'];
    }

    if (school.gpa.hide_from_print) {
      gpaClassList = [...gpaClassList, 'hide-from-print'];
    }

    if (school.lab) {
      let labClassList = ['school-lab'];

      if (school.lab.hide_from_print) {
        labClassList = [...labClassList, 'hide-from-print'];
      }

      lab = (
        <div className={ labClassList.join(' ') }>
          <div className="school-lab-name">{ school.lab.name }</div>
          <List items={ school.lab.items } />
        </div>
      );
    }

    return (
      <div className={ classList.join(' ') }>
        <h5 className="section-name">{ school.name }</h5>
        <div className="section-title">{ school.title }</div>
        <Period period={ school.period } />
        <div className={ gpaClassList.join(' ') }>GPA: { school.gpa.score } / { school.gpa.total }</div>
        { lab }
      </div>
    );
  }
}

export default School;
