/*jslint node: true, white: true */
"use strict";

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

gulp.task('templates', function() {
  gulp
    .src('./templates/**/*.jade')
    .pipe(jade({pretty: true}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass']);
  gulp.watch('./templates/**/*.jade', ['templates']);
});

gulp.task('default', ['templates', 'sass']);
