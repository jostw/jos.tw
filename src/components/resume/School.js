import React, { Component, PropTypes } from 'react';

import Period from './Period';
import List from '../../containers/resume/List';

class School extends Component {
  static propTypes = {
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
  }

  render() {
    const { name, title, period, gpa, lab } = this.props;

    let classList = ['school'];
    let gpaClassList = ['school-gpa'];
    let labContent = null;

    if (this.props.hide_from_print) {
      classList = [...classList, 'hide-from-print'];
    }

    if (gpa.hide_from_print) {
      gpaClassList = [...gpaClassList, 'hide-from-print'];
    }

    if (lab) {
      let labClassList = ['school-lab'];

      if (lab.hide_from_print) {
        labClassList = [...labClassList, 'hide-from-print'];
      }

      labContent = (
        <div className={ labClassList.join(' ') }>
          <div className="school-lab-name">{ lab.name }</div>
          <List items={ lab.items } />
        </div>
      );
    }

    return (
      <div className={ classList.join(' ') }>
        <h5 className="section-name">{ name }</h5>
        <div className="section-title">{ title }</div>
        <Period period={ period } />
        <div className={ gpaClassList.join(' ') }>GPA: { gpa.score } / { gpa.total }</div>
        { labContent }
      </div>
    );
  }
}

export default School;
