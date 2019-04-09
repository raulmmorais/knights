const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

gulp.task('app.html', ()=>{
    return gulp.src('app/**/*.html').pipe(gulp.dest('public'))
})

gulp.task('app.css', ()=>{
    return gulp.src('app/**/*.css')
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.js', ()=>{
    return gulp.src('app/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', ()=>{
    return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
})