setInterval(function() {
	console.log("hello");
}, 5000)

console.log("world");

var http = require("http");
setInterval(function() {
	console.log("fetching google.com..");
	
	http.get({ host: "google.com" }, function(res) {
	console.log(res.headers);
});
}, 10000);

console.log("hello");

var s = http.createServer(function(req, res) {
	res.writeHead(200);
	setTimeout(function() {
		res.end("hello\nworld\n!");
	}, 7000);
	});
	
s.listen(8000);


