'use strict';

/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in the 'gulp' folder. Any files in that directory get
 *  automatically required below.
 *
 * To add a new task, simply add a new task file in that directory.
 */

var gulp = require('gulp');
var requireDir = require('require-dir');

global.paths = {
  // CSS sources
  'css': './css/*',
  // Distribution folder.
  'dist': './dist',
  // Image sources.
  'img': './img/*',
  // TODO: replace with ./src or ./build
  'index': './',
  // Sources folder.
  'src': './src',
  // Specs folder.
  'spec': './spec',
  // Specs glob.
  'specs': './spec/**/*Spec.js'
};

// Require all tasks in the 'gulp' folder.
requireDir('./gulp', { recurse: false });

// Default task; test & build
gulp.task('default', ['test', 'build']);
