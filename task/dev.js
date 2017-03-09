var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var scss = require('gulp-scss');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var buffer = require('vinyl-buffer');
var babel = require('babelify');


require('./clean');
var server = require('./server');
var globalNamespace = 'AgentsManage';
var paths = require('./paths');

function styles() {
    console.log('rebulid styles');
    // 加载sass源文件
    return gulp.src(paths.styles.main)
        .pipe(scss()) // 编译 scss
        .pipe(sourcemaps.init()) // 初始化 sourcemap
        .pipe(sourcemaps.write('.')) // 写入 sourcemap
        .pipe(rename({
            basename: 'main',
        })) // 重命名输入文件
        .pipe(gulp.dest(paths.styles.dest)) // 输出到目标目录
        .pipe(server.reload()); // 刷新服务器
}

function scripts() {
    console.log('rebulid scripts');
    // 获取完整文件列表
    var filenames = glob.sync(paths.scripts.src);
    return browserify({
            entries: filenames,
            debug: true
        }) // 初始化
        .require(paths.scripts.main) // 设置入口文件
        .transform(babel) // 加入插件
        .bundle() // 打包并生产数据流
        .pipe(source('main.js')) // 输出源码到 main.js
        .pipe(buffer()) // 数据流转换
        .pipe(gulp.dest(paths.scripts.dest)) // 输出到目标目录
        .pipe(server.reload()) // 刷新服务器
        .on('error', function(err) {
            console.log(err);
            return false;
            // this.emit('end');
        }) // 错误回调
}

function cp() {
    // 复制html文件
    console.log('copy html file to assets.');
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(server.reload());
}

function cpimg() {
    console.log('copy images file to assets.');
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest))
        .pipe(server.reload());
}

function watchAll() {
    // 先清理
    runSequence('clean' /* 清理生产目录 */, ['scripts', 'styles'] /* 打包 js 和 css */, function() {
        cp(); // 复制html文件
        cpimg();
        server.start(function(connect) {
            return ['/api/*', function(req, res) {
                res.send("middleware OK!");
            }]
        }); // 运行服务器
    })
    console.log('paths.scripts.src => ', paths.scripts.src);
    console.log('paths.styles.src => ', paths.styles.src);
    console.log('paths.html.src => ', paths.html.src);
    // 开始监控源码文件
    watch(paths.scripts.src, scripts);
    watch(paths.styles.src, styles);
    watch(paths.html.src, cp);
    watch(paths.images.src, cpimg);
}


gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watchAll);