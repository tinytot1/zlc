const gulp = require('gulp')
var requireDir = require('require-dir');
const path = require('path')
const zlc = require('./zlc')
const config = require('../config/zlcconfig')
const compiler = require('./compiler')
const connect = require('gulp-connect')
const getPort = require('get-port')
const watch = require("gulp-watch")


class Tools {
    constructor() {

    }

    build(...args) {
        console.log('start build all:')
        // 调用 compiler 文件的每个 js， 构造编译文件对应的 compiler
        requireDir('./template')
        compiler.all(config, function () {
            console.log("end build!")
        })
    }

    // 启动服务监听
    connect() {
        const root = config.dist()
        getPort({ port: config.server.port }).then((port) => {
            connect.server({
                root: root,
                port: port,
                livereload: true
            })
            watch(config.dist('**/*.*'), (file) => {
                console.log(`changed:  ${file.history}`)
            }).pipe(connect.reload())
        })
    }

}

module.exports = new Tools()