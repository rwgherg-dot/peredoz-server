const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/',
  proxied: true,
  allow_discovery: true
});

console.log('PeerJS server started on port ' + port);
