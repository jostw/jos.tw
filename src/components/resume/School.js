import React, { Component, PropTypes } from 'react';

import Period from './Period';
import List from '../../containers/resume/List';

class School extends Component {
  static propTypes = {
    school: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ...Period.propTypes.isRequired,
      gpa: PropTypes.shape({
        score: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        hide_from_print: PropTypes.bool
      }).isRequired,
      lab: PropTypes.shape({
        name: PropTypes.string.isRequired,
        items: List.propTypes.items.isRequired,
        hide_from_print: PropTypes.bool
      }),
      hide_from_print: PropTypes.bool
    }).isRequired
  }

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
