'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('scripts', function () {
    gulp.src('./js/ola.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./js/'));
});

gulp.task('styles', function () {
  gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
    .pipe(gulp.dest('./css/'));

  // gulp.src('./css/*.css')
  //   .pipe(autoprefixer({
  //       browsers: ['last 2 versions'],
  //       cascade: false
  //   }))
  //   .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
});

// default gulp task
gulp.task('default', ['scripts', 'styles'], function() {
  gulp.watch('./css/*.scss', ['styles']);
  gulp.watch('./js/ola.js', ['scripts']);
});
