import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import rootSaga from './src/sagas';
import App from './src/containers/App';

const templatePath = path.join(__dirname, 'build/index.html');

const store = configureStore();
store.runSaga(rootSaga);

const root = renderToString(
  <Provider store={ store }>
    <App />
  </Provider>
);

fs.writeFile(
  templatePath,
  fs.readFileSync(templatePath).toString()
    .replace('<div id="root"></div>', `<div id="root">${root}</div>`)
);
