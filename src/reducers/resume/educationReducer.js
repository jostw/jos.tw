export default function education(state = {
  label: {
    content: 'Education'
  },
  schools: [
    {
      name: 'National Tsing Hua University',
      title: 'Master\'s degree, Computer Science',
      period: {
        begin: 'September 2009',
        end: 'June 2011'
      },
      gpa: {
        score: 3.97,
        total: 4.3,
        hide_from_print: true
      },
      lab: {
        name: 'Multimedia and Knowledge Engineering Laboratory',
        items: [
          {
            content: 'Advisor: Arbee L.P. Chen'
          }, {
            content: 'Research Field: Data Mining, Social Network, Social Influence'
          }
        ],
        hide_from_print: true
      }
    }, {
      name: 'National Central University',
      title: 'Bachelor\'s degree, Computer Science',
      period: {
        begin: 'September 2005',
        end: 'June 2009'
      },
      gpa: {
        score: 3,
        total: 4
      },
      hide_from_print: true
    }
  ]
}, action) {
  return state;
}
