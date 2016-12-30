import fs from 'fs';
import path from 'path';
import { EventEmitter } from 'events';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

const imagePath = path.join(__dirname, 'build/img');
const mediaPath = path.join(__dirname, 'build/static/media');
const fileType = '*.png';
const imageminOptions = { plugins: [imageminPngquant({ quality: '90' })] };

EventEmitter.defaultMaxListeners = 0;

imagemin([path.join(imagePath, fileType)], imagePath, imageminOptions);
imagemin([path.join(mediaPath, fileType)], mediaPath, imageminOptions);
