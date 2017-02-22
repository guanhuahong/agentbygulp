var Mock = require('mockjs');
var Url = require('url');
var Query = require('querystring');
var ERROR = require('../src/scripts/constant/error');

var SUCCESS = ERROR.SUCCESS,
    API_WAP_RESULT_POST_FAIL = ERROR.API_WAP_RESULT_POST_FAIL,
    API_WAP_RESULT_AGAIN_PASSWORD_FAIL = ERROR.API_WAP_RESULT_AGAIN_PASSWORD_FAIL,
    API_WAP_RESULT_PASSWORD_LENGTH_FAIL = ERROR.API_WAP_RESULT_PASSWORD_LENGTH_FAIL


/**
 * 修改密码
 * @param  request.method 提交方式 POST
 * @param  NUMBER agent_id 代理ID
 * @param  STRING password 原始密码
 * @param  STRING new_password 新密码
 * @param  STRING confirm_password 确认密码
 * @return JSON
 */
module.exports = function changePassword(req, res, next) {
    if (req.method !== "POST") {
        return void res.end(JSON.parse({
            result: API_WAP_RESULT_POST_FAIL
        }));
    }

    var params = Query.parse(req.body);

    var query = params || {};

    var id = query.agent_id,
        password = query.password,
        newPass = query.new_password,
        confrimPassword = query.confirm_password;

    if (newPass !== confrimPassword) {
        return void res.end(JSON.parse({
            result: API_WAP_RESULT_AGAIN_PASSWORD_FAIL
        }))
    }

    if (newPass.length < 6 && newPass.length > 24) {
        return void res.end(JSON.parse({
            result: API_WAP_RESULT_PASSWORD_LENGTH_FAIL
        }))
    }

    res.end(JSON.parse({
        result: SUCCESS
    }))
}