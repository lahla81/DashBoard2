var gulp = require('gulp');
var connect = require('gulp-connect');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var scssToCss = require('gulp-sass');

gulp.task('scss',function(){
    return gulp.src('src/assets/sass/style.scss')
    .pipe(scssToCss())
    .pipe(cleanCss())
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('bootstrap',function(){
    return gulp.src('src/assets/sass/bootstrap.scss')
    .pipe(scssToCss())
    .pipe(gulp.dest('build/assets/css/bootstrap/'));
});


gulp.task('clean',function(){
    return del('build');
});

gulp.task('connect',function(){
    connect.server({
        root: 'build',
        livereload: true,
        port: 8080
    })
});
gulp.task('watch',function(){
    return gulp.watch('src/**/*',gulp.parallel(['build']))
});

gulp.task('html',function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('css',function() {
    return gulp.src('src/assets/css/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('build/assets/css'))
    .pipe(connect.reload())
});

gulp.task('js',function() {
    return gulp.src(['src/assets/js/*.js','src/assets/js/**/*.js'])
    // .pipe(uglify())
    .pipe(gulp.dest('build/assets/js'))
    .pipe(connect.reload());
});

gulp.task('images',function() {
    return gulp.src(['src/assets/img/*','src/assets/img/**/*'])
    .pipe(gulp.dest('build/assets/img/'))
    .pipe(connect.reload());
});

gulp.task('img',function() {
    return gulp.src('src/assets/image/*')
    .pipe(gulp.dest('build/assets/image/'))
    .pipe(connect.reload());
});

gulp.task('files',function() {
    return gulp.src('src/assets/files/*')
    .pipe(gulp.dest('build/assets/files/'))
    .pipe(connect.reload());
});

gulp.task('fonts',function() {
    return gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('build/assets/fonts/'))
    .pipe(connect.reload());
});



gulp.task('build',gulp.series(['html','js','img','css','images','files','fonts','scss','bootstrap']));
gulp.task('default',gulp.parallel(['build','connect','watch']));