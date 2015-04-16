// raw tcp server in node.js

//require tcp library and put in variable
var net = require('net')

//tcp runs on sockets
//this is an echo server. there is no socket.end response
var server = net.createServer(function(socket) {
	socket.write('hello...\n');
	socket.write('\n...world');
	socket.on('data', function(data) {
		socket.write(data);
	});
});

server.listen(8080);
