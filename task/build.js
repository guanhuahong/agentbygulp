var gulp = require('gulp');
var runSequence = require('run-sequence');
var scss = require('gulp-scss');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var buffer = require('vinyl-buffer');
var babel = require('babelify');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var minifyHTML   = require('gulp-minify-html');


var clean = require('./clean');

var globalNamespace = 'AgentsManageExport';
var paths = require('./paths');

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(scss())
        .pipe(cleanCSS())
        .pipe(rev())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(rev.manifest())
        .pipe(gulp.dest(paths.styles.rev));
}

function scripts() {
    var filenames = glob.sync(paths.scripts.src);
    return browserify({
            entries: filenames,
            debug: false
        })
        .require(paths.scripts.main, { expose: globalNamespace })
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        })
        .transform(babel)
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(rev())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(rev.manifest())
        .pipe(gulp.dest(paths.scripts.rev));
}

function revhtml() {
    return gulp.src([paths.html.rev, paths.html.src])
        .pipe(revCollector({
            '/styles/': paths.styles.dest,
            '/scripts/': paths.scripts.dest
        }))
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest(paths.html.dest))
}


function build() {
    scripts()
    styles()
    revhtml();
}

gulp.task('build', ['clean'], build);