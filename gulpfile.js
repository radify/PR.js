var gulp = require('gulp');
var conn = require('gulp-connect');

gulp.task('serve', function() {
  conn.server({
    root: __dirname,
    port: 3003
  });

  console.log("Demo server started at localhost:3003");
});