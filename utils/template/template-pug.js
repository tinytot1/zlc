const compiler = require('../compiler')
const gulp = require('gulp')
const pug = require('gulp-pug')
const replace = require('gulp-replace')
const config = require('../../config/zlcconfig')

compiler.defined('pug', function () {
    this.compile = (task, options, cb) => {
        // 编译的目录文件
        const dist = task.dist
        const g = gulp.src(task.src)
        g.pipe(pug())
        if (config.replace) {
            g.pipe(replace(config.replace.src, config.replace.value))
        }
        g.pipe(gulp.dest(dist))
            .on("end", cb || function () { });
    }
})