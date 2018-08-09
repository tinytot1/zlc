const gulp = require('gulp')
var requireDir = require('require-dir');
const path = require('path')
const zlc = require('./zlc')
const config = require('../config/zlcconfig')
const compiler = require('./compiler')
const connect = require('gulp-connect')
const portfinder = require('portfinder')
const watch = require("gulp-watch")
const proxy = require('http-proxy-middleware')


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

        portfinder.basePort = config.server.port
        portfinder.getPortPromise().then(port => {
            connect.server({
                root: root,
                port: port,
                livereload: true,
                middleware: function (connect, opt) {
                    const p = function () {
                        // 服务转发，可以配置多个
                        var a = []
                        if (config.server.proxy) {
                            for (let [k, v] of Object.entries(config.server.proxy)) {
                                a.push(proxy(k, v))
                            }
                        }
                        return a
                    }
                    return p()
                }
            })
            watch(config.dist('**/*.*'), (file) => {
                console.log(`changed:  ${file.history}`)
            }).pipe(connect.reload())
        }).catch(err => {
            console.log(`get port err: ${err}`)
        })
    }

}

module.exports = new Tools()