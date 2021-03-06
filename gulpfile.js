const gulp = require('gulp');

const sass = require('gulp-sass');

const browserSync = require('browser-sync');

const autoprefixer = require('gulp-autoprefixer');

const uglify = require('gulp-uglify');

const concat = require('gulp-concat');

const cleanCss = require('gulp-clean-css');


gulp.task('scss', function() {

    return gulp.src('app/scss/*.scss')

    .pipe(sass({ outputStyle: 'expanded' }))

    .pipe(autoprefixer({ overrideBrowserslist: ['last 5 versions'], cascade: false }))

    .pipe(gulp.dest('app/css'))

    .pipe(browserSync.reload({ stream: true }))

});

gulp.task('bundlecss', function() {

    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/owl.carousel/dist/assets/owl.carousel.css'
    ])

    .pipe(concat('bundle.min.css'))

    .pipe(cleanCss({ level: { 1: { specialComments: 0 } } }))

    .pipe(gulp.dest('app/css'))

    .pipe(browserSync.reload({ stream: true }))

});

gulp.task('bundlejs', function() {

    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/owl.carousel/dist/owl.carousel.js',
        'node_modules/gsap/dist/gsap.js',
        'node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
        'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
        'node_modules/vanilla-lazyload/dist/lazyload.js'
    ])

    .pipe(concat('bundle.min.js'))

    .pipe(uglify())

    .pipe(gulp.dest('app/js'))

    .pipe(browserSync.reload({ stream: true }))

});

gulp.task('js', function() {

    return gulp.src('app/js/*.js')

    .pipe(browserSync.reload({ stream: true }))

});

gulp.task('html', function() {

    return gulp.src('app/*.html')

    .pipe(browserSync.reload({ stream: true }))

});

gulp.task('browsersync', function() {

    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });

});

gulp.task('watch', function() {

    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))

    gulp.watch('app/js/*.js', gulp.parallel('js'))

    gulp.watch('app/*.html', gulp.parallel('html'))

});

gulp.task('default', gulp.parallel('scss', 'bundlecss', 'bundlejs', 'browsersync', 'watch'));