var gulp = require('gulp');
var del = require('del');

function clean() {
    return del(['assets', 'rev']);
}

module.exports = clean;

gulp.task('clean', clean);