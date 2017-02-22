var gulp = require('gulp');
var connect = require('gulp-connect');
var rewrite = require('express-urlrewrite');
var paths = require('./paths');

var preferences = require('../mock/preferences'); // 系统设置
var addAgent = require('../mock/addAgent'); // 添加代理
var sendSmsToken = require('../mock/sendSmsToken'); // 发送手机验证码
var getAgents = require('../mock/getAgents'); // 代理列表
var getPlayers = require('../mock/getPlayers'); // 玩家列表
var changePassword = require('../mock/changePassword'); // 修改密码
var withdrawRecord = require('../mock/withdrawRecord'); // 提现记录
var withdraw = require('../mock/withdraw'); // 提现
var profitRecord = require('../mock/profitRecord'); // 分成记录
var changeProfit = require('../mock/changeProfit'); // 修改分成



function startServer() {
    console.log('server: http://localhost:' + paths.html.port);
    connect.server({
        name: 'Dev APP',
        root: [paths.html.dest],
        port: paths.html.port,
        livereload: true,
        middleware: function(connect, opt) {
            var app = connect();
            return [
                app.use(rewrite(/^\/(?!api|scripts|styles|images)[\s\S]*/, '/')),
                app.use('/api/preferences', preferences),
                app.use('/api/addAgent', addAgent),
                app.use('/api/getSmsToken', sendSmsToken),
                app.use('/api/agents', getAgents),
                app.use('/api/players', getPlayers),
                app.use('/api/changePassword', changePassword),
                app.use('/api/withdrawRecord', withdrawRecord),
                app.use('/api/withdraw', withdraw),
                app.use('/api/profitRecord', profitRecord),
                app.use('/api/changeProfit', changeProfit),
            ]
        }
    });
    return connect;
}

function reload() {
    return connect.reload();
}

exports.start = startServer;
exports.reload = reload;