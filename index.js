const fs = require('fs')
const getData = 'data.json'


function readSync(placeHolder){ 
const data = fs.readFileSync(placeHolder, "utf-8");
console.log(data)
}

function readAsync() {
fs.readFile('data.json', "utf-8", (err, file) => { 
  if (err) throw err 
//   console.log(file)
})
}

readSync(getData);

readAsync();

