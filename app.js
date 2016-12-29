import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import metaReducer from './src/reducers/metaReducer';
import Index from './src/containers/Index';

const indexPath = path.join(__dirname, 'public');
const resumePath = path.join(__dirname, 'public/resume');

const templateName = 'index.html';
const { index, resume } = metaReducer();

fs.writeFileSync(path.join(indexPath, templateName), renderToString(
  <Index { ...index } />
));

if (!fs.existsSync(resumePath)) {
  fs.mkdirSync(resumePath);
}

fs.writeFileSync(path.join(resumePath, templateName), renderToStaticMarkup(
  <Index { ...resume } />
));
