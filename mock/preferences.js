var Mock = require('mockjs');
var Random = Mock.Random;
var Url = require('url');
var Query = require('querystring');
var ERROR = require('../src/scripts/constant/error');

var SUCCESS = ERROR.SUCCESS

module.exports = function preferences(req, res, next) {
    var result = Mock.mock({
        result: SUCCESS,
        account: {
            'id|100011-100099': 0,
            nick: function() {
                return Random.cname()
            },
            phone: /^1(3|4|5|7|8)\d{9}$/,
            'level|1-5': 0,
            'profit|0-100': 0,
            createTime: function() {
                return Random.date('yyyy-MM-dd HH:mm:ss');
            }
        }
    });
    res.end(JSON.stringify(result));
}