var gulp = require('gulp');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');


var sassConfig = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var dirs = {
  jsClient: 'source/scripts/**/*.js',
  scss: 'source/scss/**/*.scss',
  html: 'source/views/**/*.html',
};


gulp.task('clean-build', function() {
  return gulp
    .src('build', {read: false})
    .pipe(clean());
});

gulp.task('clean-css', function() {
  return gulp
    .src('public/stylesheets', {read: false})
    .pipe(clean());
});

gulp.task('clean-js', function() {
  return gulp
    .src('public/javascripts', {read: false})
    .pipe(clean());
});



gulp.task('scss', function() {
  return gulp
    .src(dirs.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(scss(sassConfig).on('error', scss.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('scss-min', function() {
  return gulp
    .src(dirs.scss)
    .pipe(scss(sassConfig).on('error', scss.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/stylesheets/'));
});



gulp.task('js-client', function() {
  return gulp
    .src(dirs.jsClient)
    .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('js-client-min', function() {
  return gulp
    .src(dirs.jsClient)
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts/'));
});



gulp.task('html', function() {
  return gulp
    .src(dirs.html)
    .pipe(gulp.dest('.'));
});



gulp.task('watch', 
  ['js-client', 'scss', 'html'], 
  function() {
    gulp.watch(dirs.jsClient, ['js-client']);
    gulp.watch(dirs.scss, ['scss']);
    gulp.watch(dirs.html, ['html']);
});


gulp.task('clean-all',
    ['clean-css', 'clean-js', 'clean-build']);

gulp.task('build', 
    ['js-client', 'scss', 'html']);

gulp.task('build:prod',
    ['js-client-min', 'scss-min', 'html']);
