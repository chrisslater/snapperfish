// import path from 'path';
// const env = process.env.NODE_ENV || 'development';
// let returnValue;
//
// if (__CLIENT__) {
//  if (env === 'production') {
//    returnValue = require('env-production');
//  } else {
//    returnValue = require('env-development');
//  }
// } else {
//  returnValue = require(path.resolve('envConfig', `env-${env}`));
// }

export default {
  CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
};
