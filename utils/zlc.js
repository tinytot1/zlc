class Zlc {
    constructor(argv) {
        this.argv = process.argv.slice(2)
        this.cwd = process.cwd()
        this.zlc = new Map()
    }

    task(key, fn) {
        this.zlc.set(key, fn)
    }
    
    run() {
        const taskName = this.argv.length > 0 ? this.argv[0] : 'default'
        if (this.zlc.get(taskName)) {
            this.zlc.get(taskName)()
        } else {
            console.log(`zlc：${taskName} is not a zlc command. See 'zlc --help'.`)
        }
    }
}
module.exports = new Zlc()