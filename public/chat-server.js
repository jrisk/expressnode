// chat server with tcp sockets
var net = require('net');

sockets = [];

var server = net.createServer(function(socket) {
	sockets.push(socket);
	
	socket.on('data', function(d) {
		for (var i = 0; i < sockets.length; i++) {
			sockets[i].write(d);
		}
	});
	
	socket.on('end', function() {
	var i = sockets.indexOf(socket);
	sockets.splice(i, 1);
	});
});

server.listen(8000);

//telnet might need both client and normal permission from admin control panel to work
