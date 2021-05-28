const app = require("./app");
const http = require("http")
const debug = require('debug')('demo:server');
const { normalizePort, getIPv4 } = require("./common/util");


let port =  normalizePort(process.env.PORT || '8000');

let server = http.createServer(app.callback())

const ipv4 = getIPv4()

server.listen(port, '127.0.0.1');

server.on("listening", () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : addr.port;
    console.log('Listening at ' + 'http://localhost:' + bind + '\n' + 'or at ' + 'http://' +ipv4 + ':' + bind)
  debug('Listening on ' + bind);
})