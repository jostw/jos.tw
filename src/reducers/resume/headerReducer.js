const CONTACT_WEB = 'http://jos.tw';
const CONTACT_EMAIL = 'mail@jos.tw';

export default function header(state = {
  name: 'Joseph Yeh',
  title: 'Front End Developer',
  links: [
    {
      className: 'website',
      content: CONTACT_WEB
    }, {
      className: 'email',
      link: `mailto:${CONTACT_EMAIL}`,
      content: CONTACT_EMAIL
    }
  ],
  items: [
    {
      className: 'location',
      content: 'Taipei, Taiwan'
    }
  ]
}, action) {
  return state;
}
