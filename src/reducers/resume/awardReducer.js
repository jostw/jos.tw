export default function award(state = {
  label: {
    content: 'Awards'
  },
  awards: [
    {
      name: {
        content: 'MUZIK Together',
        link: 'https://news.microsoft.com/zh-tw/2014-05-19_%E5%BE%AE%E8%BB%9Fwindowsapp%E9%BB%91%E5%AE%A2%E6%9D%BE%E8%B7%A8%E5%A4%9C%E9%96%8B%E7%99%BC%E7%AB%B6%E8%B3%BD%E5%85%A8%E7%90%8335%E5%9F%8E%E5%B8%82%E5%90%8C%E6%AD%A5%E4%B8%B2%E8%81%AF/'
      },
      title: 'Best Cross-platform App, Microsoft //Publish/ Hackathon',
      period: 'May 2014',
      items: [
        {
          content: 'Synchronized music playing with everyone'
        }, {
          content: 'Universal Windows App run across desktop, tablet and mobile',
          hide_from_print: true
        }, {
          content: 'Sharing most of the code between different devices',
          hide_from_print: true
        }, {
          content: 'Developed from scratch within 24 hours and worked as expected'
        }
      ]
    }
  ]
}, action) {
  return state;
}
