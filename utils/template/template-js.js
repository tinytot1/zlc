const compiler = require('../compiler')
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const path = require("path")

compiler.defined('js', function () {
    this.compile = (task, options, cb) => {
        // 编译的目录文件
        const dist = task.dist
        // 是否合并
        const merge = path.extname(dist) === '.js'
        gulp.src(task.src)
            .pipe(gulpIf(merge, concat(path.basename(dist))))
            .pipe(gulp.dest(merge ? path.dirname(dist) : dist))
    }
})