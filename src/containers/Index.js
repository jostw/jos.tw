import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import rootSaga from '../sagas';
import App from './App';

import resumeStore from '../store/resumeStore';
import ResumeApp from './resume/App';

class Index extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    favicon: PropTypes.string.isRequired,
    stylesheets: PropTypes.arrayOf(PropTypes.string).isRequired,
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ga_code: PropTypes.string.isRequired
  }

  render() {
    const { lang, favicon, stylesheets, titles, descriptions, keywords, type, url, image, ga_code } = this.props;

    const links = stylesheets.map((stylesheet, index) => {
      return (
        <link rel="stylesheet" key={ `stylesheet-${index}` }
              href={ stylesheet } />
      );
    });

    const title = titles.join(' / ');
    const description = descriptions.join(' ');
    const keyword = keywords.join(', ');

    let root = null;
    let store = null;

    if (url.match('resume')) {
      store = resumeStore();

      root = (
        <ResumeApp />
      );
    } else {
      store = configureStore();
      store.runSaga(rootSaga);

      root = (
        <App />
      );
    }

    return (
      <html lang={ lang }>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="shortcut icon" href={ favicon } />
          { links }

          <title>{ title }</title>

          <meta name="description" content={ description } />
          <meta name="keywords" content={ keyword } />

          <link rel="canonical" href={ url } />

          <meta property="og:url" content={ url } />
          <meta property="og:type" content={ type } />
          <meta property="og:title" content={ title } />
          <meta property="og:site_name" content={ title } />
          <meta property="og:description" content={ description } />
          <meta property="og:image" content={ image } />
        </head>
        <body>
          <div id="root">
            <Provider store={ store }>{ root }</Provider>
          </div>

          <script dangerouslySetInnerHTML={{ __html: ga_code }} />
        </body>
      </html>
    );
  }
}

export default Index;
