const fs = require('fs')
const files = fs.readdirSync(__dirname)
console.log('name file directory', files)
files.forEach((f) => console.log(f))
