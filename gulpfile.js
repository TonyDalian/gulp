const gulp = require('gulp')
const sass = require('gulp-ruby-sass')

gulp.task('sass', function () {
    return sass('./sass/main.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./css'))
})

gulp.task('watch',function(){
   gulp.watch('./sass/*.scss',['sass']);
});