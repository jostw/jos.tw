import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import resumeStore from './src/store/resumeStore';

import rootSaga from './src/sagas';

import App from './src/containers/App';
import Resume from './src/containers/Resume';

const templatePath = path.join(__dirname, 'build/index.html');
const resumeTemplatePath = path.join(__dirname, 'build/resume/index.html');

const store = configureStore();
store.runSaga(rootSaga);

renderTemplate(templatePath, renderToString(
  <Provider store={ store }>
    <App />
  </Provider>
));

renderTemplate(resumeTemplatePath, renderToStaticMarkup(
  <Provider store={ resumeStore() }>
    <Resume />
  </Provider>
));

function renderTemplate(path, content) {
  fs.writeFileSync(
    path,
    fs.readFileSync(path).toString()
      .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
  );
}
