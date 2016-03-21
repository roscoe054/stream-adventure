var concat = require('concat-stream')

process.stdin.pipe(concat(function(data){
    var result = data.toString().split("").reverse().join("")
    console.log(result);
}))
