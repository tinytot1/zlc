class Compiler {
    constructor() {
        this.compilers = new Map()
    }

    /**
     * 构造各类型文件编译模板
     * @param {string} compilerName 编译模块名字（js、css）
     * @param {Function} compiler 编译模板构造器
     */
    defined(compilerName, compiler) {
        this.compilers.set(compilerName, new compiler())
    }

    /**
     * 编译函数
     * @param {string} compilerName 编译模块名字（js、css）
     * @param {object} task 编译任务 {src: "", dist: ""}
     * @param {object} options 配置
     * @param {Function} cb 
     */
    build(compilerName, task, options, cb) {
        const compile = this.compilers.get(compilerName)
        compile.compile(task, {}, cb)
    }

    /**
     * 编译所有文件
     * @param {object} cfg 编译的配置文件
     * @param {Function} callback 
     */
    all(cfg, callback = function () { }) {
        // 循环每个对象js\html\pug...
        for (let [k, v] of Object.entries(cfg.build)) {
            v.map(task => {
                this.build(k, task)
            })
        }
        callback()
    }
}

module.exports = new Compiler()