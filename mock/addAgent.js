var Mock = require('mockjs');
var Url = require('url');
var Query = require('querystring');
var ERROR = require('../src/scripts/constant/error');

var SUCCESS = ERROR.SUCCESS,
    API_WAP_RESULT_POST_FAIL = ERROR.API_WAP_RESULT_POST_FAIL;


module.exports = function addAgent(req, res, next) {
    var params,
        url;
    if (req.method === 'GET') {
        url = Url.parse(req.originalUrl);
        params = Query.parse(url.query);
    } else {
        params = Query.parse(url.body);
    }
    var query = params || {};
    var playerId = query.id,
        phone = query.phone,
        nick = query.nick,
        address = query.address;

    res.end(
        JSON.stringify(Mock.mock({
            result: SUCCESS,
            agent: {
                "id|100001-100999": 0,
                "player_id": playerId,
                "phone": phone,
                "nick": nick,
                "address": address,
            }
        }))
    )
}