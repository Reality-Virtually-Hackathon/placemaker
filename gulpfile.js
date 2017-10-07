/* ES6 */
const gulp = require('gulp');
const babel = require('gulp-babel'); // In case as i use babelify
const babelify = require("babelify");

/* Default */
const fs = require('fs');

/* Mixed */
const watch = require('gulp-watch');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');


/* TASKS */
gulp.task('build-js', () => {
   return browserify({
            entries: [
              './src/js/modules.js',
              './src/js/ashaders/*.js',
              './src/js/components/*.js'
              ]})
    .bundle()  
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
});

gulp.task('default', () => {

  gulp.start('build-js');
  // gulp.start('copy-files-into-build');

  watch('./src/js/**/*.js', () => {
    gulp.start('build-js');
  });
  watch('./*.js', () => {
    gulp.start('build-js');
  });
  watch('./**/*.html', () => {
    gulp.start('copy-files-into-build');
  });

});