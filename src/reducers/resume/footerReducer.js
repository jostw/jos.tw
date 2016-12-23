const RESUME_PDF_LINK = 'http://jos.tw/resume.pdf';
const RESUME_HACKPAD_LINK = 'https://jos.hackpad.com/resume';

export default function footer(state = {
  copyright: 'Copyright © 2017 Joseph Yeh',
  links: [
    {
      classList: ['icon', 'fa', 'fa-file-pdf-o'],
      link: RESUME_PDF_LINK,
      title: 'Download PDF'
    }, {
      classList: ['icon', 'fa', 'fa-print'],
      link: 'javascript:window.print();',
      title: 'Print'
    }, {
      classList: ['icon', 'fa', 'fa-pencil'],
      link: RESUME_HACKPAD_LINK,
      title: 'Edit on Hackpad'
    }
  ]
}, action) {
  return state;
}
