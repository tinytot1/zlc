const compiler = require("../compiler")
const gulp = require('gulp')
const gulpif = require('gulp-if')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const path = require("path")
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const autoprefixer = require('gulp-autoprefixer')

compiler.defined('scss', function () {
  this.compile = (task, options, cb) => {
    // 编译的目录文件
    const dist = task.dist
    // 是否合并
    const merge = path.extname(dist) === '.css'
    gulp.src(task.src).pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
      .pipe(gulpif(merge, concat(path.basename(dist))))
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      // .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(merge ? path.dirname(dist) : dist))
      .on("end", cb || function () { })
  }
})