const compiler = require('../compiler')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const path = require("path")
const config = require('../../config/zlcconfig')

compiler.defined('html', function () {
    this.compile = (task, options, cb) => {
        // 编译的目录文件
        const dist = task.dist
        // 是否合并
        const merge = path.extname(dist) === '.html'
        const g = gulp.src(task.src)
        if (config.replace) {
            g.pipe(replace(config.replace.src, config.replace.value))
        }
        g.pipe(gulpif(merge, rename(path.basename(dist))))
            .pipe(gulp.dest(merge ? path.dirname(dist) : dist))
            .on("end", cb || function () { });
    }
})