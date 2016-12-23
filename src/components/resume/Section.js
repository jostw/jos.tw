import React, { Component } from 'react';

import List from './List';
import Company from './Company';
import Project from './Project';
import Award from './Award';
import School from './School';
import Publication from './Publication';

class Section extends Component {
  render() {
    const { section } = this.props;

    let classList = ['section'];
    let labelClassList = ['section-label'];
    let label = null;
    let content = null;

    if (section.hide_from_print) {
      classList = [...classList, 'hide-from-print'];
    }

    if (section.label.className) {
      labelClassList = [...labelClassList, `section-label-${section.label.className}`];
    }

    if (section.label.has_html) {
      label = (
        <h6 className={ labelClassList.join(' ') }
            dangerouslySetInnerHTML={{ __html: section.label.content }} />
      );
    } else {
      label = (
        <h6 className={ labelClassList.join(' ') }>{ section.label.content }</h6>
      );
    }

    if (section.items) {
      content = (
        <List items={ section.items } />
      );
    } else if (section.companies) {
      content = (
        <ul>{
          section.companies.map((company, index) => {
            return (
              <li key={ `company-${index}` }>
                <Company company={ company } />
              </li>
            );
          })
        }</ul>
      );
    } else if (section.projects) {
      content = (
        <ul>{
          section.projects.map((project, index) => {
            return (
              <li key={ `project-${index}` }>
                <Project project={ project } />
              </li>
            );
          })
        }</ul>
      );
    } else if (section.awards) {
      content = (
        <ul>{
          section.awards.map((award, index) => {
            return (
              <li key={ `award-${index}` }>
                <Award award={ award } />
              </li>
            );
          })
        }</ul>
      );
    } else if (section.schools) {
      content = (
        <ul>{
          section.schools.map((school, index) => {
            return (
              <li key={ `school-${index}` }>
                <School school={ school } />
              </li>
            );
          })
        }</ul>
      );
    } else if (section.publications) {
      content = (
        <ul>{
          section.publications.map((publication, index) => {
            return (
              <li key={ `publication-${index}` }>
                <Publication publication={ publication } />
              </li>
            );
          })
        }</ul>
      );
    }

    return (
      <section className={ classList.join(' ') }>
        { label }
        <article className="section-article">{ content }</article>
      </section>
    );
  }
}

export default Section;
