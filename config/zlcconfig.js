
const path = require("path")
let cwd = process.cwd()
var fs = require("fs")

const config = {
    server: {
        port: 8080,
    },
    dist: 'dist',
    build: {
    }
};
const zlcPath = path.join(cwd, 'zlcfile.js')
// 用户配置的zlcfile.js
const user = fs.existsSync(zlcPath)
if (user) {
    const zlc = require(zlcPath)
    // 覆盖属性
    for (let k of Object.keys(zlc)) {
        config[k] = zlc[k]
    }
}

const dist = !user ? "" : (config.dist || "dist")

config.dist = (...args) => {
    let arr = [cwd, dist]
    arr.push(...args)
    return path.join(...arr)
}
config.src = (...args) => {
    let arr = [cwd]
    arr.push(...args)
    return path.join(...arr)
}

for (let v of Object.values(config.build)) {
    v.map((item) => {
        item.dist = config.dist(item.dist || "")
        if (item.src instanceof Array) {
            for (let i = 0; i < item.src.length; ++i) {
                item.src[i] = config.src(item.src[i])
            }
        } else {
            item.src = config.src(item.src)
        }
    })
}

module.exports = config