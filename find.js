var mongoose = require('mongoose');

require('./model.js');

var wechat = mongoose.model('wechat');

wechat.find({}, function (err, doc) {
	if (err) {
		console.log('err: ', err);
		return;
	}
	console.log('doc: ', doc);
});
