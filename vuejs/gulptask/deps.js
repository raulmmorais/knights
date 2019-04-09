const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js'])

gulp.task('deps.js', ()=>{
  return gulp.src([
    'node_modules/vue/dist/vue.min.js',
  ])
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})