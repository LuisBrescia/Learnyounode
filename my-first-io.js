const fs = require('fs')

const buffer = fs.readFileSync(process.argv[2])
const str = buffer.toString();

let total = 0;

for (let index = 0; index < str.length; index++) {
    if(str[index] == '\n'){
        total++;
    }  
}

console.log(total);