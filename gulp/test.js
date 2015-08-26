'use strict';

require('babel-core/register');

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  return gulp.src(global.paths.specs).pipe(jasmine({ includeStackTrace: true }));
});
