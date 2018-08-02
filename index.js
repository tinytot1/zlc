#!/usr/bin/env node

const zlc = require('./utils/zlc')
const tools = require('./utils/tools')


// 注册编译命令
zlc.task('build', (...args) => {
    tools.build.apply(tools, args)
})

zlc.run()