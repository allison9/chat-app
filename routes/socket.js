var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../socket.io/lib/socket.js'))
});
module.exports = router;