var mysql = require('mysql');
var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    let un = req.body.username
    let p = req.body.password
    const loginSql = "select * from account where account=" + un + " and password=" + p
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456*',
        database: 'users'
    });
    connection.connect();
    connection.query(loginSql, function (err, result) {
        if (err) {
            // 500 stands for server internal error
            res.sendStatus(500)
        } else {
            if (result.length > 0) {
                // login success
                res.json({
                    'result': 'ok',
                    'payload': {
                        'account': result[0].account,
                    }
                })

            } else {
                // no username and password 匹配
                //401 stands for unauthorized
                res.sendStatus(401)
            }
        }

    });
    connection.end();
});

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/login.html'))
})

module.exports = router;
