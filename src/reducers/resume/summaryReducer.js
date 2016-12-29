export default function summary(state = {
  label: {
    className: 'summary',
    content: 'Summary'
  },
  summaries: [
    {
      content: 'Expertise in <strong>front end development</strong> with 4 years experience',
      has_html: true
    }, {
      content: 'Solid <strong>JavaScript</strong> programming skills including architecture and optimization',
      has_html: true
    }, {
      content: 'Experienced in internationalization and RTL support',
    }, {
      content: 'Passionate for new techniques and familiar with <strong>modern web frameworks</strong>',
      has_html: true
    }, {
      content: 'Interest in visualization and design',
    }
  ]
}, action) {
  return state;
}
