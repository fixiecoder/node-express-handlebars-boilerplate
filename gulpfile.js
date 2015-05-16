"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

if (process.env.CI) {
    gulp.task('default', ['sass', 'javascriptFiless']);
} else {
    gulp.task('default', ['sass', 'javascriptFiles', 'watchSass', 'watchJavascriptFiles']);
}

var watchSassFiles = [
    './frontend/sass/*.scss'
];

gulp.task('sass', function () {
    return gulp.src('./frontend/sass/main.scss')
        .pipe(sass({
            onError: function (err) {
                setTimeout(function () {
                    console.log(err);
                    gulp.task('watch');
                }, 500);
            },
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./public/assets/stylesheets'));
});

gulp.task('watchSass', function () {
    return gulp.watch(watchSassFiles, ['sass']);
});

var javascriptFilesSrc = './frontend/js/**/*';

gulp.task('javascriptFiles', function() {
    return gulp.src(javascriptFilesSrc)
        .pipe(concat('sho-scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets/js'))
});

gulp.task('watchJavascriptFiles', function() {
    return gulp.watch(javascriptFilesSrc, ['javascriptFiles']);
});