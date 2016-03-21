'use strict'

var split = require('split')
var through = require('through2')

var count = 0
var tr = through(function(line, enc, next){
    count += 1
    if(count % 2 === 1){
        line = line.toString().toLowerCase() + '\n'
    } else{
        line = line.toString().toUpperCase() + '\n'
    }
    this.push(line)
    next()
})

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
