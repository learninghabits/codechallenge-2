var gulp = require('gulp');
var handlebars = require('gulp-ember-handlebars');
var print = require('gulp-print');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

var templatesHandlebars = './js/app/**/*.handlebars';
var emberTemplates = './js/app/**/*.template.js';
var templatesOutDir = './js/app';

gulp.task('cleanup', function () {   
    return gulp.src([emberTemplates], { read: false })
               .pipe(print(function (name) {
                   return "DELETED FILE: " + name;
               }))
               .pipe(clean());

});

gulp.task('compiletemplates',['cleanup'], function () {
    return gulp.src(templatesHandlebars)
        .pipe(print(function (name) {
            return "INPUT: " + name;
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
            return "OUTPUT: " + name;
        }))
        .pipe(gulp.dest(templatesOutDir));
});

gulp.task('default', ['compiletemplates']);