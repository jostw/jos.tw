import React, { Component, PropTypes } from 'react';

import Label from './Label';
import List from '../../containers/resume/List';
import Company from './Company';
import Project from './Project';
import Award from './Award';
import School from './School';
import Publication from './Publication';
import Skill from './Skill';

class Section extends Component {
  static propTypes = {
    label: PropTypes.shape(Label.propTypes).isRequired,
    summaries: List.propTypes.items,
    companies: PropTypes.arrayOf(PropTypes.shape(Company.propTypes)),
    projects: PropTypes.arrayOf(PropTypes.shape(Project.propTypes)),
    awards: PropTypes.arrayOf(PropTypes.shape(Award.propTypes)),
    schools: PropTypes.arrayOf(PropTypes.shape(School.propTypes)),
    publications: PropTypes.arrayOf(PropTypes.shape(Publication.propTypes)),
    skills: PropTypes.arrayOf(PropTypes.shape(Skill.propTypes)),
    hide_from_print: PropTypes.bool
  }

  render() {
    const { label, summaries, companies, projects, awards, schools, publications, skills } = this.props;

    let classList = ['section'];
    let content = null;

    if (this.props.hide_from_print) {
      classList = [...classList, 'hide-from-print'];
    }

    if (summaries) {
      content = (
        <List items={ summaries } />
      );
    } else if (companies) {
      content = (
        <ul>{
          companies.map((company, index) => {
            return (
              <li key={ `company-${index}` }>
                <Company { ...company } />
              </li>
            );
          })
        }</ul>
      );
    } else if (projects) {
      content = (
        <ul>{
          projects.map((project, index) => {
            return (
              <li key={ `project-${index}` }>
                <Project { ...project } />
              </li>
            );
          })
        }</ul>
      );
    } else if (awards) {
      content = (
        <ul>{
          awards.map((award, index) => {
            return (
              <li key={ `award-${index}` }>
                <Award { ...award } />
              </li>
            );
          })
        }</ul>
      );
    } else if (schools) {
      content = (
        <ul>{
          schools.map((school, index) => {
            return (
              <li key={ `school-${index}` }>
                <School { ...school } />
              </li>
            );
          })
        }</ul>
      );
    } else if (publications) {
      content = (
        <ul>{
          publications.map((publication, index) => {
            return (
              <li key={ `publication-${index}` }>
                <Publication { ...publication } />
              </li>
            );
          })
        }</ul>
      );
    } else if (skills) {
      content = (
        <ul>{
          skills.map((skill, index) => {
            return (
              <li key={ `skill-${index}` }>
                <Skill { ...skill } />
              </li>
            );
          })
        }</ul>
      );
    }

    return (
      <section className={ classList.join(' ') }>
        <Label { ...label } />
        <article className="section-article">{ content }</article>
      </section>
    );
  }
}

export default Section;
