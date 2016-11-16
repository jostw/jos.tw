export function messages() {
  return [
    {
      type: 'client',
      content: 'Tell me about yourself!'
    }, {
      type: 'server',
      content: 'I\'m a <strong>Front End Developer</strong> from Taiwan',
      has_html: true
    }, {
      type: 'server',
      content: 'Having 4 years experience with solid <strong>JavaScript</strong> programming skills',
      has_html: true
    }, {
      type: 'server',
      content: 'and familiar with <strong>modern web frameworks</strong>',
      has_html: true
    }
  ];
}
