const FIREFOX_LINK = 'https://hg.mozilla.org/';
const GAIA_LINK = 'https://github.com/mozilla-b2g/gaia';
const MARKETPLACE_APP_LINK = 'https://github.com/mozilla-b2g/marketplace-tv-front-end';
const MUZIK_AIR_LINK = 'https://www.muzikair.com/';
const MUZIK_ONLINE_LINK = 'https://www.muzik-online.com/';

const WEBPACK_LINK = 'https://webpack.github.io/';
const REACT_LINK = 'https://facebook.github.io/react/';
const FLUX_LINK = 'https://facebook.github.io/flux/';
const BROWSERIFY_LINK = 'http://browserify.org/';
const GULP_LINK = 'http://gulpjs.com/';
const BACKBONE_LINK = 'http://backbonejs.org/';
const MARIONETTE_LINK = 'https://marionettejs.com/';
const REQUIREJS_LINK = 'http://requirejs.org/';
const GRUNT_LINK = 'http://gruntjs.com/';
const ANGULARJS_LINK = 'https://angularjs.org/';
const MATERIAL_DESIGN_LINK = 'https://material.io/guidelines/material-design/introduction.html';
const SUSY_LINK = 'http://susy.oddbird.net/';

export default function project(state = {
  label: {
    content: 'Projects'
  },
  projects: [
    {
      name: {
        content: 'Firefox',
        link: FIREFOX_LINK
      },
      period: {
        begin: 'April 2016',
        end: 'November 2016'
      },
      items: [
        {
          content: 'Contributed to the front-end of Firefox',
          hide_from_print: true
        }, {
          content: 'Delivered features and bugs fixing in Preferences'
        }, {
          content: 'Solved some papercut bugs in DevTools'
        }
      ]
    }, {
      name: {
        content: 'Firefox OS TV Gaia',
        link: GAIA_LINK
      },
      period: {
        begin: 'February 2016',
        end: 'April 2016'
      },
      items: [
        {
          content: 'Implemented new features on Home App and System App'
        }, {
          content: 'Worked with large code base and some browser specific APIs'
        }
      ],
      hide_from_print: true
    }, {
      name: {
        content: 'Firefox OS TV Marketplace App',
        link: MARKETPLACE_APP_LINK
      },
      period: {
        begin: 'November 2015',
        end: 'May 2016'
      },
      items: [
        {
          content: 'Established with the application structure from Marketplace website and spatial navigation UI from TV Gaia',
          hide_from_print: true
        }, {
          content: 'Collaborated with Marketplace team remotely'
        }, {
          content: 'Resolved issues on localization and RTL support'
        }
      ]
    }, {
      name: {
        content: 'MUZIK AIR',
        link: MUZIK_AIR_LINK
      },
      period: {
        begin: 'March 2015',
        end: 'June 2015'
      },
      items: [
        {
          content: 'On-demand classical music streaming service with scenario-oriented playlists'
        }, {
          content: 'Developed each feature as reusable components'
        }, {
          content: `
            Managed workflow with
            <a class="link" href="${WEBPACK_LINK}" target="_blank" title="Webpack">Webpack</a>
            and npm scripts
          `,
          has_html: true
        }, {
          content: 'Fully responsive at any screen size'
        }, {
          content: 'Speeding up development by mocking server with Node.js'
        }
      ],
      hide_from_print: true
    }, {
      name: {
        content: 'MUZIK STUDY'
      },
      period: {
        begin: 'December 2014',
        end: 'June 2015'
      },
      items: [
        {
          content: 'B2B classical music database service'
        }, {
          content: `
            <strong>Single page application</strong> built with
            <a class="link" href="${REACT_LINK}" target="_blank" title="React">React</a> and
            <a class="link" href="${FLUX_LINK}" target="_blank" title="Flux">Flux</a>
          `,
          has_html: true
        }, {
          content: `
            Managed workflow with
            <a class="link" href="${BROWSERIFY_LINK}" target="_blank" title="Browserify">Browserify</a> and
            <a class="link" href="${GULP_LINK}" target="_blank" title="Gulp">Gulp</a>
          `,
          has_html: true
        }, {
          content: 'Fully responsive at any screen size'
        }, {
          content: 'Speeding up development by mocking server with Node.js'
        }
      ],
      hide_from_print: true
    }, {
      name: {
        content: 'MUZIK ONLINE',
        link: MUZIK_ONLINE_LINK
      },
      period: {
        begin: 'February 2013',
        end: 'June 2015'
      },
      items: [
        {
          content: 'Classical music portal including news, songs with detailed performance information and online streaming service',
          hide_from_print: true
        }, {
          content: `
            Single page application built with
            <a class="link" href="${BACKBONE_LINK}" target="_blank" title="Backbone">Backbone</a> and
            <a class="link" href="${MARIONETTE_LINK}" target="_blank" title="Marionette">Marionette</a>
          `,
          has_html: true
        }, {
          content: 'Solved the SEO problem for single page application'
        }, {
          content: `
            Managed workflow with
            <a class="link" href="${REQUIREJS_LINK}" target="_blank" title="RequireJS">RequireJS</a> and
            <a class="link" href="${GRUNT_LINK}" target="_blank" title="Grunt">Grunt</a>
          `,
          has_html: true,
          hide_from_print: true
        }
      ]
    }, {
      name: {
        content: 'Paganini Plus'
      },
      period: {
        begin: 'June 2014',
        end: 'August 2014'
      },
      items: [
        {
          content: 'DSP (demand-side platform) with audio advertising integrated with display advertising'
        }, {
          content: `
            Built with fully structured
            <a class="link" href="${ANGULARJS_LINK}" target="_blank" title="AngularJS">AngularJS</a>
            application
          `,
          has_html: true
        }, {
          content: `
            Implemented with
            <a class="link" href="${MATERIAL_DESIGN_LINK}" target="_blank" title="Material Design">Material Design</a>
            guidelines
          `,
          has_html: true
        }, {
          content: 'Delivered the project in two month with agile development'
        }
      ],
      hide_from_print: true
    }, {
      name: {
        content: 'iMusic',
        ps: 'unreleased'
      },
      period: {
        begin: 'November 2013',
        end: 'December 2013'
      },
      items: [
        {
          content: 'Prototype of music streaming service with new business model'
        }, {
          content: 'Delivered the product in one month with agile development'
        }
      ],
      hide_from_print: true
    }, {
      name: {
        content: 'Quanta Arts Foundation',
        ps: 'unreleased'
      },
      period: {
        begin: 'August 2013',
        end: 'September 2013'
      },
      items: [
        {
          content: 'Portal of Quanta Arts Foundation including news and online video service'
        }, {
          content: `
            Responsive layout built with
            <a class="link" href="${SUSY_LINK}" target="_blank" title="Susy">Susy</a>
          `,
          has_html: true
        }, {
          content: 'Customized player integrated with Youtube API'
        }
      ],
      hide_from_print: true
    }, {
      name: {
        content: 'Docubank'
      },
      period: {
        begin: 'December 2012',
        end: 'February 2013'
      },
      items: [
        {
          content: 'Cloud-based document management system with automated OCR conversion'
        }, {
          content: 'Built with pure HTML, CSS, JavaScript and jQuery'
        }, {
          content: 'Gained basic and solid knowledge of web development'
        }
      ],
      hide_from_print: true
    }
  ]
}, action) {
  return state;
}
