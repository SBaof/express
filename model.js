var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foo');

var wechatSchema = new mongoose.Schema({
	name: String,
	age: Number,
	skill: String
}, {collection: 'foo'});

mongoose.model('wechat', wechatSchema);

// mongoose.connect('mongodb://localhost/bjb_wecha_monitor');

// var wechatSchema = new mongoose.Schema({
// 	title: String,
// 	author: String,
// 	push_time: Date,
// 	wecha_id: String
// }, {collection: 'articles'});

// mongoose.model('wechat', wechatSchema);

