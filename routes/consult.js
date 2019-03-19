var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
// app = express(),
//     server = require('http').createServer(app),
//     io = require('socket.io').listen(server); //引入socket.io模块并绑定到服务器
// app.use('/', express.static(__dirname + '../views/consult.html'));
// server.listen(80);
//
// //socket部分npm
// io.on('connection', function(socket) {
//     //接收并处理客户端发送的foo事件
//     socket.on('foo', function(data) {
//         //将消息输出到控制台
//         console.log(data);
//     })
// });
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/consult.html'))
});

module.exports = router;
