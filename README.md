# zlc 

ZLC is a front-end development tool based on webpack and gulp, which supports the separation and development of the front and rear ends.

### Installation

Install with npm:
```js
npm install zlc -g
```

### Introduction

- Build projects quickly
- Start the static service
- Monitor file changes, refresh the page in real time.
- Source compilation, compression（support：css/js/pug/md/vue Etc.）
- Front-end separation and service forwarding.
- ES6 to ES5, improved js code browser compatibility
### Command list

| command        | instructions  
| --------       | :-----   |
| zlc        | Start the static service      |
| zlc config        | Generate zlcfile.js configuration file (for configuration code compilation, service forwarding, etc.)      |
| zlc build        | Compile the project      |
| zlc -v        | Check the currently installed zlc version      |

### Sample zlcfile.js

```js
{
    // Service agent forwarding
    server: {
        port: 8080,
        proxy:{
            //Automatically forward the request containing /api to the target server address
            "/api":{
                target: 'localhost:8080', // target host 
                changeOrigin: true
            }
        }
    }
    // compile
    build :{
        // src: source directory; dist：target directory；
        // Compile js
        js:[],
        css:[],
        // Compile HTML without providing code merge functionality.
        html:[],
        // Compiling jade does not provide code merge functionality.
        others:[]
    },
    //The compiled file holds the directory.
    dist:"dist",
    //Global substitution field
    replace:[
        {src:"${version}",value:"?_v=0.0.1",}
    ]
}
```
