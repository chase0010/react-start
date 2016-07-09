var mongoose = require('mongoose');

//mongo地址
const uri = 'mongodb://localhost/react-start';

//连接mongo
mongoose.connect(uri);


var BookSchema = new mongoose.Schema({
	name: String,
	author: String,
	publishTime: Date
});

mongoose.model('Book', BookSchema);


var Book = mongoose.model('Book');


// 数据查询
Book.findOne({author:'Eosen'}, function(err, doc){
	if(err){
		console.log('err:', err);
		return;
	}
	console.log('result', doc);
});

/* 数据查询
Book.find({},function(err, docs){
	if(err){
		console.log('err:', err);
		return;
	}
	console.log('result', docs);
});
*/

/* 数据插入
var book = new Book({
	name: '从零开始node',
	author: 'Chase',
	publishTime: new Date()
});

book.author = 'Eosen';

book.save(function(err){
	console.log('sava status:', err ? 'failed' : 'success');
});
*/