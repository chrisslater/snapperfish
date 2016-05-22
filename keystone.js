// Configure the navigation bar in Keystone's Admin UI
// Keystone
const keystone = require('keystone');
//const session = require('express-session');
const flash = require('connect-flash');
//const serve = require('serve-static');

module.exports = function (app) {
//Session and flash are required by keystone
  app.use(flash());
  //app.use(session({
  //  secret: 'Keystone is the best!',
  //  resave: false,
  //  saveUninitialized: true
  //}));

  keystone.app = app;
  keystone.mongoose = require('mongoose');

  keystone.init({
    'name': 'Snapperfish',
    'brand': 'Snapperfish brand',
    //'session': false,
    'updates': 'api/updates',
    'auth': true,
    //'less': 'static',
    //'static': 'static',
    //'user model': 'User',
    'user model': 'Y',
    'auto update': true,
    //'cookie secret': 'happyunicorns',
    'mongo' : process.env.MONGODB_URI,
  });

  keystone.import('api/models');

  keystone.set('routes', require('./api/routes'));
  keystone.set('cloudinary config', process.env.CLOUDINARY_URL);

  //
  //keystone.set('nav', {
  //  posts: ['posts', 'post-categories'],
  //  galleries: 'galleries',
  //  enquiries: 'enquiries',
  //  ys: 'ys',
  //});

//// Serve your static assets
  //app.use(serve('./static'));

  //keystone.routes(app);

  return keystone;
};