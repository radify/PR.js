'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

// Start local dev server.
gulp.task('serve', function() {
  connect.server({
    root: global.paths.index,
    port: 3003,
    livereload: true
  });

  console.log("Demo server started at localhost:3003");
});
