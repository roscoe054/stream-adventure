var through = require('through2');
var stream = through(function(buffer, encoding, next) {
	var str = buffer.toString().toUpperCase()
	this.push(str)
	next()
}, function(done) {
	done()
});

process.stdin.pipe(stream).pipe(process.stdout)

// official version
// var through = require('through2');
// var tr = through(function(buf, _, next) {
// 	this.push(buf.toString().toUpperCase());
// 	next();
// });
// process.stdin.pipe(tr).pipe(process.stdout);
