const compiler = require("../compiler")

compiler.defined('css', function () {
    this.compile = (task, options, cb) => {
        console.log(task)
    }
})