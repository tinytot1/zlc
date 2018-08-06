const compiler = require('../compiler')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const concat = require('gulp-concat')
const path = require("path")
var uglify = require('gulp-uglify')

compiler.defined('js', function () {
    this.compile = (task, options, cb) => {
        // 编译的目录文件
        const dist = task.dist
        // 是否合并
        const merge = path.extname(dist) === '.js'
        gulp.src(task.src)
            .pipe(gulpif(merge, concat(path.basename(dist))))
            .pipe(uglify())
            .pipe(gulp.dest(merge ? path.dirname(dist) : dist))
            .on("end", cb || function () { });
    }
})