
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
const superstatic = require('superstatic');

module.exports = {
  server: {
      baseDir: ['src'],
      middleware: [superstatic({stack:'strict'})]
   },
   port: 3001,
   watch: true,
   files: ['./src/*.html', './src/**/*.css', './src/**/*.js']
};