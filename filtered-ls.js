const fs = require('fs')
const path = require('path')

let tipo = '.' + process.argv[3]

fs.readdir(process.argv[2], function (err, list) {
    
    for (let index = 0; index < list.length; index++) {
        if (path.extname(list[index]) == tipo) {
            console.log(list[index])
        }
    }
})