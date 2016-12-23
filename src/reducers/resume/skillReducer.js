export default function skill(state = {
  label: {
    className: 'skill',
    content: 'Technical<span class="br"></span>Skills',
    has_html: true
  },
  skills: [
    {
      name: 'Front End Development',
      items: ['HTML5', 'CSS3', 'JavaScript', 'ES6']
    }, {
      name: 'JavaScript Frameworks',
      items: ['React', 'Redux', 'Flux', 'AngularJS', 'Backbone', 'Marionette', 'jQuery']
    }, {
      name: 'CSS Frameworks',
      items: ['PostCSS', 'Sass', 'Compass', 'Susy', 'Bootstrap', 'Pure']
    }, {
      name: 'Automating Tools',
      items: ['Webpack', 'Browserify', 'Gulp', 'Grunt', 'RequireJS']
    }, {
      name: 'Testing Tools',
      items: ['Mocha', 'Chai', 'Jasmine', 'Jest', 'CasperJS']
    }, {
      name: 'Back End Development',
      items: ['Node.js', 'Express', 'Hapi', 'Socket.IO', 'PHP', 'MySQL']
    }, {
      name: 'Version Control',
      items: ['Git', 'Git Flow', 'GitHub']
    }, {
      name: 'System Architectures',
      items: ['AWS', 'Docker']
    }, {
      name: 'Graphic Tools',
      items: ['Adobe Photoshop', 'Adobe Illustrator']
    }
  ],
  hide_from_print: true
}, action) {
  return state;
}
