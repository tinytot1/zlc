const compiler = require('../compiler')
const gulp = require('gulp')

compiler.defined('others', function () {
    this.compile = (task, options, cb) => {
        // 编译的目录文件
        const dist = task.dist
        // 是否合并
        gulp.src(task.src)
            .pipe(gulp.dest(dist))
            .on("end", cb || function () { });
    }
})