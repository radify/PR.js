'use strict';

var gulp   = require('gulp');
var exec   = require('child_process').execSync;
var runSeq = require('run-sequence');

gulp.task('build', function(done) {
  runSeq('buildjs', done);
});

// Build JS for distribution.
gulp.task('buildjs', function () {
  exec('npm run buildjs', function (err, stdout, stderr) {
    if (err) {
      throw err;
    }
    else {
      console.log('Build complete!');
    }
  });
});
