import gulp from 'gulp';
import concat from 'gulp-concat';
import babel from 'gulp-babel-minify';
import imageMin from 'gulp-imagemin';
import cssMin from 'gulp-css-minify';
import eslint from 'gulp-eslint-new';

const SRC_FOLDER = './src';
const BUILD_FOLDER = './build';
const JS_FILES_PATH = SRC_FOLDER + '/js/**/*.js'
const IMG_FILES_PATH = SRC_FOLDER + '/img/**'
const CSS_FILES_PATH = SRC_FOLDER + '/css/**/*.css'


async function jsCompilation() {
    gulp.src(JS_FILES_PATH)
        .pipe(babel())
        .pipe(concat('result.js'))
        .pipe(gulp.dest(BUILD_FOLDER))
}
async function imgCompilation() {
	gulp.src(IMG_FILES_PATH)
		.pipe(imageMin())
		.pipe(gulp.dest(BUILD_FOLDER + '/img'))
}
async function cssCompilation() {
	gulp.src(CSS_FILES_PATH)
		.pipe(cssMin())
		.pipe(gulp.dest(BUILD_FOLDER + '/css'))
}
gulp.src([JS_FILES_PATH ,'!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.result(result => {
        console.log(`ESLint result: ${result.filePath}`);
        console.log(`# Messages: ${result.messages.length}`);
        console.log(`# Warnings: ${result.warningCount}`);
        console.log(`# Errors: ${result.errorCount}`);
    }));

gulp.task('watch-js', function () {
    gulp.watch(JS_FILES_PATH, jsCompilation);
})
gulp.task('watch-img', function () {
    gulp.watch(IMG_FILES_PATH, imgCompilation);
})
gulp.task('watch-css', function () {
    gulp.watch(CSS_FILES_PATH, cssCompilation);
})
gulp.task('watch', gulp.parallel('watch-js', 'watch-img', 'watch-css'));
gulp.task('default', gulp.parallel(jsCompilation, imgCompilation, cssCompilation));