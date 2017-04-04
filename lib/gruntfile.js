'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        predef: ["console", "ko"],
        esnext: true,
        globalstrict: true,
        globals: { "require": true, "Global": true },
        browserify: false
      }
    },

    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js', '../javascripts/**/*.json'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};
