const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))

function buildStyles() {
    return src('library/scss/index.scss')
        .pipe(sass())
        .pipe(dest('library/dist'))
}

function watchTask() {
    watch(['library/scss/index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)