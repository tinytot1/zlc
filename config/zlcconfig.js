module.exports = {
    dist: 'dist',
    build: {
        js: [
            {
                src: "src/common/**/*.js",
                dist: "common/common.js"
            },
            {
                src: "src/view/**/*.js",
                dist: "sss.js"
            }
        ],
        css: [
            {
                src: "src/common/**/*.css",
                dist: "app.css"
            },
            {
                src: "src/view/**/*.css",
                dist: ""
            }
        ]
    }
};