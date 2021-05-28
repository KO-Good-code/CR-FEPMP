const os = require("os");


exports.getIPv4 = function () { 
  let ip4s = [];
  // 获取网络接口对象
  let interfaces = os.networkInterfaces();
  Object.keys(interfaces).forEach(key => {
    interfaces[key].forEach(item => {
      if('IPv4' !== item.family || item.internal !== false) return;
      ip4s.push(item.address);
    })
  })
  return ip4s[0]
 }


// 设置端口
exports.normalizePort = function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}