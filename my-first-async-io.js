const fs = require('fs')

fs.readFile(process.argv[2], function (err, buffer) { 
    var str = buffer.toString();

    let total = 0;

    for (let index = 0; index < str.length; index++) {
        if (str[index] == '\n') {
            total++;
        }
    }

    console.log(total);
})

