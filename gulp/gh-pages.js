'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe($.gh-pages());
});