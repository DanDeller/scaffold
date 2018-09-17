const gulp        = require('gulp'),
      minifycss   = require('gulp-minify-css'),
      babel       = require('gulp-babel'),
      less        = require('gulp-less'),
      concat      = require('gulp-concat'),
      watch       = require('gulp-watch'),
      notify      = require('gulp-notify'),
      changed     = require('gulp-changed'),
      sourcemaps  = require('gulp-sourcemaps'),
      livereload  = require('gulp-livereload'),
      child       = require('child_process'),
      nodemon     = require('gulp-nodemon');

const filePath = {
      less: {
        src: './public/src/styles/**/*.less',
        dest: './public/assets/css'
      },
      js: {
        src: './public/src/js/**/*.js',
        dest: './public/assets/mainJS'
      }
    };

const nodemonOptions = {
  script: 'server.js',
  ext: 'js',
  env: {'NODE_ENV': 'development'},
  verbose: false,
  ignore: [],
  watch: ['bin/*', 'routes/*', 'server.js']
};

gulp.task('start', () => {
  nodemon(nodemonOptions).on('restart', () => {
    console.log('Restarted.');
  });
});

gulp.task('less', () => {
  return gulp.src([
    filePath.less.src
  ])
  .pipe(changed(filePath.less.dest))
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(minifycss())
  .pipe(concat('style.css'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(filePath.less.dest))
  .pipe(notify({message: 'Less task complete.'}));
});

gulp.task('js', () => {
  return gulp.src([
    filePath.js.src
  ])
  .pipe(changed(filePath.js.dest))
  .pipe(babel())
  .pipe(concat('main.js'))
  .pipe(gulp.dest(filePath.js.dest))
  .pipe(notify({message: 'JS task complete.'}));
});

gulp.task('watch-parts', () => {
  gulp.watch(filePath.js.src, ['js']);
  gulp.watch(filePath.less.src, ['less']);
});

gulp.task('build', ['less', 'js']);
gulp.task('watch', ['watch-parts']);
gulp.task('default', ['watch']);