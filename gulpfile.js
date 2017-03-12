var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

var src_sass = './app/assets/sass/**/*.sass';
var dest_css = './app/assets/css';
var src_html = './app/*.html';

gulp.task('sass', function(){
  return gulp.src(src_sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(sass())
      .pipe(prefix({
        browsers: ['last 3 versions']
      }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(dest_css))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function(){

  browserSync.init({
    server: './app/'
  })
  gulp.watch(src_sass, ['sass'])
  gulp.watch(src_html).on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'sass'])