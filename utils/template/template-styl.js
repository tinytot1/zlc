const compiler = require("../compiler")
const gulp = require('gulp')
const gulpif = require('gulp-if')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const stylus = require('gulp-stylus')
const path = require("path")
const autoprefixer = require('gulp-autoprefixer')

compiler.defined('styl', function () {
    this.compile = (task, options, cb) => {
        // 编译的目录文件
        const dist = task.dist
        // 是否合并
        const merge = path.extname(dist) === '.styl'
        gulp.src(task.src)
            .pipe(gulpif(merge, concat(path.basename(dist))))
            .pipe(stylus({
                compress: true,
                // prefix: 'zh'
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            // .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(merge ? path.dirname(dist) : dist))
            .on("end", cb || function () { })
    }
})