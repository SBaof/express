var express = require('express');
var qiniu = require("qiniu");

var app = express();

qiniu.conf.ACCESS_KEY = 'vD3FhrJ0lQpFYdl4LmjHMN1rwwRnFzBnneuqSYzs';
qiniu.conf.SECRET_KEY = '7VJXHhikzu8RF5C_3TLWqOaHcDLOkG2OIZLU6sc-';
qiniu.conf.RPC_TIMEOUT = 10;

// var mongoose = require('mongoose');

// require('./model.js');

// var wechat = mongoose.model('wechat');
// console.log(wechat);



// app.get('/wechat', function(req, res) {
// 	var info = '';
// 	wechat.find({}, function (err, doc) {
// 		if (err) {
// 			console.log('err: ', err);
// 			return;
// 		}
// 		console.log('doc: ', doc);
// 		info = doc;
// 		res.send(doc);
// 	});
// });

// app.get('/find/:name?/:age?', function(req, res) {
// 	console.log(req.params);
// 	var where = {};
// 	if (req.params.name) {
// 		where.name = req.params.name;
// 	}
// 	if (req.params.age) {
// 		where.age = req.params.age;
// 	}
// 	console.log('where: ', where);
// 	wechat.find(where, function (err, doc) {
// 		if (err) {
// 			console.log('err: ', err);
// 			return;
// 		}
// 		console.log('doc: ', doc);
// 		res.send(doc);
// 	});
// });

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/', function(req, res) {
	//构建私有空间的链接
	url = 'http://img.sanbf.cn/1c4fd43d-e3ca-4dfb-a891-e14ba5af01ea.jpg';
	var policy = new qiniu.rs.GetPolicy();

	//生成下载链接url
	var downloadUrl = policy.makeRequest(url);

	//打印下载的url
	console.log(downloadUrl);
	res.send(downloadUrl);
});

app.get('/foo', function(req, res) {
	res.send({
		"foo": "bar"
	});
})

app.listen(9999, function() {
	console.log('app is running on port 9999!');
});
