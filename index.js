#!/usr/bin/env node

const zlc = require('./utils/zlc')
const tools = require('./utils/tools')
const fs = require('fs')
const path = require('path')


// 注册编译命令
zlc.task('build', (...args) => {
    tools.build.apply(tools, args)
})
// 生成配置
zlc.task("config", function () {
    const data = fs.readFileSync(path.join(__dirname, 'config', 'zlcfile.js'), 'utf-8')
    fs.writeFileSync(path.join(zlc.cwd, 'zlcfile.js'), data)
});
zlc.run()