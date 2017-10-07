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
