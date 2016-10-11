var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src('src/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('dist/index.html', browserSync.reload);
});
