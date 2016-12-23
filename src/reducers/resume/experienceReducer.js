const FIREFOX_LINK = 'https://www.mozilla.org/firefox/';
const FIREFOX_OS_LINK = 'https://www.mozilla.org/firefox/os/';

export default function experience(state = {
  label: {
    content: 'Experience'
  },
  companies: [
    {
      name: 'Mozilla',
      title: 'Software Engineer',
      period: {
        begin: 'November 2015',
        end: 'November 2016'
      },
      item: {
        content: `
          Working on large open source projects and contributes to
          <a class="link" href="${FIREFOX_LINK}" target="_blank" title="Firefox">Firefox</a> and
          <a class="link" href="${FIREFOX_OS_LINK}" target="_blank" title="Firefox OS">Firefox OS</a>.
          Collaborating with numerous Mozillians and contributors around the world.
          Solid code reviewing process.
        `,
        has_html: true
      }
    }, {
      name: 'MUZIK Creative Digital Ltd.',
      title: 'Front End Engineer',
      period: {
        begin: 'November 2012',
        end: 'June 2015'
      },
      item: {
        content: `
          Working as the main Front End Engineer in MUZIK,
          a startup in Taiwan focused on music streaming services and other related business.
        `
      }
    }
  ]
}, action) {
  return state;
}
