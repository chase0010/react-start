var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	uid: Number,
	username: String,
	createTime: Date
});

//注册model
mongoose.model('User', UserSchema);