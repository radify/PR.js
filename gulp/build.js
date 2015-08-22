'use strict';

var gulp   = require('gulp');
var runSeq = require('run-sequence');

gulp.task('build', function(done) {
  runSeq('clean', ['buildjs'], done);
});


