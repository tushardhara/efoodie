/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */
module.exports = function(grunt) {

  grunt.config.set('concat', {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
    },
    jsf: {
      src: require('../pipeline').jsFilesToInjectFrontend,
      dest: '.tmp/public/concat/backendproduction.js'
    },
    cssf: {
      src: require('../pipeline').cssFilesToInjectFrontend,
      dest: '.tmp/public/concat/backendproduction.css'
    },
    jsb: {
      src: require('../pipeline').jsFilesToInjectBackend,
      dest: '.tmp/public/concat/backendproduction.js'
    },
    cssb: {
      src: require('../pipeline').cssFilesToInjectBackend,
      dest: '.tmp/public/concat/backendproduction.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
