module.exports = {
    build: {
        js: [
            {
                src: "code/**/*.js",
                dist: ""
            }
        ],
        css: [
            {
                src: "code/**/*.css",
                dist: ""
            }
        ],
        html: [
            {
                src: "code/**/*.html",
                dist: ""
            }
        ],
        // 直接拷贝
        others: [{
            src: "code/favicon.ico",
            dist: ""
        },
        {
            src: ["code/**/*.png", "code/**/*.gif", "code/**/*.ico", "code/**/*.jpg", "code/**/*.svg"],
            dist: ""
        },
        {
            src: ["code/**/*.ttf", "code/**/*.otf", "code/**/*.eot", "code/**/*.woff", "code/**/*.woff2"],
            dist: ""
        },
        {
            src: "code/**/*.json",
            dist: ""
        }]
    }
}