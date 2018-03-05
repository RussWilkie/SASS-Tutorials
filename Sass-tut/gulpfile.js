const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        },
    })
    
})

gulp.task('styles', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['browserSync', 'styles'], function(){
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('*.html',browserSync.reload);
})