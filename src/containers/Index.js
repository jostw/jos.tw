import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import rootSaga from '../sagas';
import App from './App';

import resumeStore from '../store/resumeStore';
import ResumeApp from './resume/App';

class Index extends Component {
  static propTypes = {
    meta: PropTypes.shape({
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
    }).isRequired
  }

  render() {
    const { meta } = this.props;

    const stylesheets = meta.stylesheets.map((stylesheet, index) => {
      return (
        <link rel="stylesheet" key={ `stylesheet-${index}` }
              href={ stylesheet } />
      );
    });

    const title = meta.titles.join(' / ');
    const description = meta.descriptions.join(' ');
    const keywords = meta.keywords.join(', ');

    let root = null;
    let store = null;

    if (meta.url.match('resume')) {
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
      <html lang={ meta.lang }>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="shortcut icon" href={ meta.favicon } />
          { stylesheets }

          <title>{ title }</title>

          <meta name="description" content={ description } />
          <meta name="keywords" content={ keywords } />

          <link rel="canonical" href={ meta.url } />

          <meta property="og:url" content={ meta.url } />
          <meta property="og:type" content={ meta.type } />
          <meta property="og:title" content={ title } />
          <meta property="og:site_name" content={ title } />
          <meta property="og:description" content={ description } />
          <meta property="og:image" content={ meta.image } />
        </head>
        <body>
          <div id="root">
            <Provider store={ store }>{ root }</Provider>
          </div>

          <script dangerouslySetInnerHTML={{ __html: meta.ga_code }} />
        </body>
      </html>
    );
  }
}

export default Index;
