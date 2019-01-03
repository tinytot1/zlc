const compiler = require('../compiler')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const path = require("path")
const uglify = require('gulp-uglify')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const replace = require('gulp-replace')
const config = require('../../config/zlcconfig')

compiler.defined('js', function () {
    this.compile = (task, options, cb) => {
        // 编译的目录文件
        const dist = task.dist
        // 是否合并
        const merge = path.extname(dist) === '.js'
        const g = gulp.src(task.src).pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        if (config.replace) {
            g.pipe(replace(config.replace.src, config.replace.value))
        }
        g.pipe(gulpif(merge, concat(path.basename(dist))))
            .pipe(babel())
            .pipe(uglify())
            .pipe(gulp.dest(merge ? path.dirname(dist) : dist))
            .on("end", cb || function () { });
    }
})