import { combineReducers } from 'redux';

function index(state = {
  lang: 'en',
  favicon: '%PUBLIC_URL%/favicon.ico',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Lato:300'
  ],
  titles: [
    'Joseph Yeh',
    'Front End Developer'
  ],
  descriptions: [
    'Joseph Yeh expertise in front end development with 4 years experience.',
    'Having solid JavaScript programming skills including architecture and optimization.',
    'Also interests in visualization and design.'
  ],
  keywords: [
    'Front End Developer',
    'JavaScript',
    'Modern Web Frameworks',
    'Single Page Application',
    'Progressive Web Apps'
  ],
  type: 'website',
  link: 'http://jos.tw/',
  image: 'http://jos.tw/img/joseph-2560x1440.png',
  ga_code: `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-6245027-5', 'auto');
    ga('send', 'pageview');
  `
}, action) {
  return state;
}

function resume(state = index(), action) {
  return {
    ...state,
    favicon: '/favicon.ico',
    stylesheets: [
      'https://fonts.googleapis.com/css?family=Lato:300|Raleway:200',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
      'index.css'
    ],
    titles: [
      ...state.titles,
      'Resume'
    ],
    link: 'http://jos.tw/resume/'
  }
}

export default combineReducers({ index, resume });
