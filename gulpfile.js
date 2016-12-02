'use strict';
require('events').EventEmitter.prototype._maxListeners = 600;

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    notify = require('gulp-notify'),
    htmlmin = require('gulp-htmlmin'),
    fontmin = require('gulp-fontmin'),
    gzip = require('gulp-gzip');

gulp.task('concatScripts', function(){
    return gulp.src([
        'resources/assets/js/jquery.min.js',
        'resources/assets/js/jquery.fancybox.pack.js',
        'resources/assets/js/jquery.fancybox-media.js',
        'resources/assets/js/bootstrap.min.js',
        'resources/assets/js/waypoints.js',
        'resources/assets/js/modernizr.js',
        'resources/assets/js/parsley.js',
        'resources/assets/js/scripts.js'
    ])
        .pipe(maps.init())
        .pipe(concat('app.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ['concatScripts'], function(){
    return gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'))
        .pipe(notify('Уменьшение JS прошло успешно!'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('concatScriptsStart', function(){
    return gulp.src([
        'https://api-maps.yandex.ru/2.1/?lang=ru_RU',
        'resources/assets/js/jquery.fancybox.pack.js'
    ])
        .pipe(maps.init())
        .pipe(concat('app_start.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'));
});

gulp.task('minifyScriptsStart', ['concatScriptsStart'], function(){
    return gulp.src('js/app_start.js')
        .pipe(uglify())
        .pipe(rename('app_start.min.js'))
        .pipe(gulp.dest('js'))
        .pipe(notify('Уменьшение JS-start прошло успешно!'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('concatStyles', function(){
    return gulp.src([
        'resources/assets/css/bootstrap.min.css',
        'resources/assets/css/font-awesome.min.css',
        'resources/assets/css/jquery.fancybox.css',
        'resources/assets/css/font-awesome.min.css',
        'resources/assets/css/animate.css',
        'resources/assets/css/parsley.css',
        'resources/assets/css/main.css'
    ])
        .pipe(maps.init())
        .pipe(concatCss('app.css'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'));
});

gulp.task('minifyStyles', ['concatStyles'], function() {
    return gulp.src('css/app.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(notify('Уменьшение STYLES прошло успешно!'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('imagesMin', function(){
    return gulp.src(['resources/assets/images/**/*', 'resources/assets/images/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        // .pipe(notify('Уменьшение IMAGES прошло успешно!'))
        .pipe(gulp.dest('images'));
});

gulp.task('imagesMinHeader', function(){
    return gulp.src(['resources/assets/images/header/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinHeader прошло успешно!'))
        .pipe(gulp.dest('images/header'));
});

gulp.task('imagesMinFirst', function(){
    return gulp.src(['resources/assets/images/first/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinFirst прошло успешно!'))
        .pipe(gulp.dest('images/first'));
});

gulp.task('imagesMinSecond', function(){
    return gulp.src(['resources/assets/images/second/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinSecond прошло успешно!'))
        .pipe(gulp.dest('images/second'));
});

gulp.task('imagesMinThird', function(){
    return gulp.src(['resources/assets/images/third/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinThird прошло успешно!'))
        .pipe(gulp.dest('images/third'));
});

gulp.task('imagesMinFourth', function(){
    return gulp.src(['resources/assets/images/fourth/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinFourth прошло успешно!'))
        .pipe(gulp.dest('images/fourth'));
});

gulp.task('imagesMinFifth', function(){
    return gulp.src(['resources/assets/images/fifth/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinFifth прошло успешно!'))
        .pipe(gulp.dest('images/fifth'));
});

gulp.task('imagesMinSixth', function(){
    return gulp.src(['resources/assets/images/sixth/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinSixth прошло успешно!'))
        .pipe(gulp.dest('images/sixth'));
});

gulp.task('imagesMinSeventh', function(){
    return gulp.src(['resources/assets/images/seventh/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinSeventh прошло успешно!'))
        .pipe(gulp.dest('images/seventh'));
});

gulp.task('imagesMinEighth', function(){
    return gulp.src(['resources/assets/images/eighth/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinEighth прошло успешно!'))
        .pipe(gulp.dest('images/eighth'));
});

gulp.task('imagesMinNinth', function(){
    return gulp.src(['resources/assets/images/ninth/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinNinth прошло успешно!'))
        .pipe(gulp.dest('images/ninth'));
});

gulp.task('imagesMinTenth', function(){
    return gulp.src(['resources/assets/images/tenth/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinTenth прошло успешно!'))
        .pipe(gulp.dest('images/tenth'));
});

gulp.task('imagesMinTenthSecond', function(){
    return gulp.src(['resources/assets/images/tenth-second/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinTenthSecond прошло успешно!'))
        .pipe(gulp.dest('images/tenth-second'));
});

gulp.task('imagesMinEleventh', function(){
    return gulp.src(['resources/assets/images/eleventh/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinEleventh прошло успешно!'))
        .pipe(gulp.dest('images/eleventh'));
});

gulp.task('imagesMinTwelfth', function(){
    return gulp.src(['resources/assets/images/twelfth/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinTwelfth прошло успешно!'))
        .pipe(gulp.dest('images/twelfth'));
});

gulp.task('imagesMinFancy', function(){
    return gulp.src(['resources/assets/images/fancybox/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(notify('Уменьшение imagesMinFancy прошло успешно!'))
        .pipe(gulp.dest('images/fancybox'));
});

gulp.task('minifyFonts', function () {
    return gulp.src([
        'resources/assets/fonts/*.ttf',
        'resources/assets/fonts/*.woff',
        'resources/assets/fonts/*.woff2',
        'resources/assets/fonts/*.svg',
        'resources/assets/fonts/*.eot',
        'resources/assets/fonts/*.etf',
    ])
        .pipe(fontmin({
            text: 'Уменьшение закончилось!',
        }))
        // .pipe(notify('Уменьшение Fonts прошло успешно!'))
        .pipe(gulp.dest('fonts'));
});

gulp.task('minifyHtml', function() {
    return gulp.src('resources/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(notify('Уменьшение HTML прошло успешно!'))
        .pipe(gulp.dest(''))
});

gulp.task('copy-php', function() {
    return gulp.src('resources/*.php')
        .pipe(gulp.dest(''));
});

gulp.task('copy-htaccess', function() {
    return gulp.src('resources/.htaccess')
        .pipe(gulp.dest(''));
});

gulp.task('watch', function(){
    gulp.watch(['resources/assets/css/*.css', 'resources/assets/css/**/*.css'], ['minifyStyles']);
    gulp.watch(['resources/assets/js/*.js', 'resources/assets/js/**/*.js'], ['minifyScripts']);

    // gulp.watch(['resources/assets/images/**/*'], ['imagesMin']);

    gulp.watch(['resources/assets/images/header/*'], ['imagesMinHeader']);
    gulp.watch(['resources/assets/images/first/*'], ['imagesMinFirst']);
    gulp.watch(['resources/assets/images/second/*'], ['imagesMinSecond']);
    gulp.watch(['resources/assets/images/third/*'], ['imagesMinThird']);
    gulp.watch(['resources/assets/images/fourth/*'], ['imagesMinFourth']);
    gulp.watch(['resources/assets/images/fifth/*'], ['imagesMinFifth']);
    gulp.watch(['resources/assets/images/sixth/*'], ['imagesMinSixth']);
    gulp.watch(['resources/assets/images/seventh/*'], ['imagesMinSeventh']);
    gulp.watch(['resources/assets/images/eighth/*'], ['imagesMinEighth']);
    gulp.watch(['resources/assets/images/ninth/*'], ['imagesMinNinth']);
    gulp.watch(['resources/assets/images/tenth/*'], ['imagesMinTenth']);
    gulp.watch(['resources/assets/images/tenth-second/*'], ['imagesMinTenthSecond']);
    gulp.watch(['resources/assets/images/eleventh/*'], ['imagesMinEleventh']);
    gulp.watch(['resources/assets/images/twelfth/*'], ['imagesMinTwelfth']);
    gulp.watch(['resources/assets/images/fancybox/*'], ['imagesMinFancy']);

    gulp.watch([
        'resources/assets/fonts/*.ttf',
        'resources/assets/fonts/*.woff',
        'resources/assets/fonts/*.woff2',
        'resources/assets/fonts/*.svg',
        'resources/assets/fonts/*.eot',
        'resources/assets/fonts/*.etf',
    ], ['minifyFonts']);
    gulp.watch(['resources/*.html'], ['minifyHtml']);
    // gulp.watch(['resources/*.php'], ['copy-php']);
    // gulp.watch(['resources/.htaccess'], ['copy-htaccess']);
});

gulp.task('cleanAll', function(){
    del([
        './fonts',
        './css',
        './js',
        './images',
        '*.html',
        // '*.php',
        // '.htaccess'
    ])
});

gulp.task('build', [
                'minifyStyles',
                'minifyScripts',
                // 'minifyScriptsStart',
                // 'imagesMin',

                'imagesMinHeader',
                'imagesMinFirst',
                'imagesMinSecond',
                'imagesMinThird',
                'imagesMinFourth',
                'imagesMinFifth',
                'imagesMinSixth',
                'imagesMinSeventh',
                'imagesMinEighth',
                'imagesMinNinth',
                'imagesMinTenth',
                'imagesMinTenthSecond',
                'imagesMinEleventh',
                'imagesMinTwelfth',
                'imagesMinFancy',

                'minifyHtml',
                'minifyFonts',
                // 'copy-php',
                // 'copy-htaccess'
    ], function(){
        return gulp.src([
            "css/app.min.css",
            'js/app.min.js',
            'fonts/**',
            'images/**',
            '*.html',
            // '*.php',
            // '.htaccess'
        ], { base: './'})
            .pipe(gulp.dest(''));
    });

gulp.task('serve', ['watch']);

gulp.task('default', ['cleanAll'], function(){
    gulp.start('build');
});
