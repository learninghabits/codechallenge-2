var gulp = require('gulp');
var handlebars = require('gulp-ember-handlebars');
var print = require('gulp-print');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');

var templatesHandlebars = './js/app/**/*.handlebars';
var templatesOutDir = './js/app/';
var emberTemplates = './js/app/**/*.template.js';
var applicationDirectory = './js/';
var allCustomJavaScriptFiles = applicationDirectory + '**/*.js';
var minifiedJavaScriptFiles = applicationDirectory + '**/*.min.js';
var htmlTemplate = './templates/index.html';

gulp.task('cleanup', function () {
    return gulp.src([emberTemplates, minifiedJavaScriptFiles], { read: false })
               .pipe(print(function (name) {
                   return "DELETED FILE: " + name;
               }))
               .pipe(clean());
});

gulp.task('compiletemplates', ['cleanup'], function () {
    return gulp.src([templatesHandlebars])
        .pipe(print(function (name) {
            return "COMPILE INPUT: " + name;
        }))
        .pipe(handlebars({
            outputType: 'browser',
            processName: function (name) {
                return name.substr(name.lastIndexOf('/') + 1)
                           .replace('.handlebars', '');
            }
        }))
        .pipe(rename({ suffix: '.template' }))
        .pipe(print(function (name) {
            return "COMPILE OUTPUT: " + name;
        }))
        .pipe(gulp.dest(templatesOutDir));
});

gulp.task('minify', ['compiletemplates'], function () {
    return gulp.src([allCustomJavaScriptFiles])
               .pipe(print(function (name) {
                   return "MINIFY INPUT: " + name;
               }))
               .pipe(uglify())
               .pipe(rename({ suffix: '.min' }))
               .pipe(print(function (name) {
                   return "MINIFY OUTPUT: " + name;
               }))
               .pipe(gulp.dest(applicationDirectory));
});

gulp.task('inject', ['minify'], function () {
    return gulp.src(htmlTemplate)
               .pipe(inject(gulp.src([
                   './js/app/app.min.js',
                   './js/app/**/*.min.js'
               ])))
               .pipe(gulp.dest('./'));
});

gulp.task('wiredep', ['inject'], function () {
    var wiredep = require('wiredep').stream;
    return gulp.src('./index.html')
                .pipe(wiredep({
                    bowerJson: require('./bower.json'),
                    directory: './libs',
                    ignorePath: '../..'
                }))
               .pipe(gulp.dest('./'));
});

gulp.task('default', ['compiletemplates']);