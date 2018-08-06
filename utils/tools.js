const gulp = require('gulp')
var requireDir = require('require-dir');
const path = require('path')
const zlc = require('./zlc')
const config = require('../config/zlcconfig')
const compiler = require('./compiler')


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
}

module.exports = new Tools()