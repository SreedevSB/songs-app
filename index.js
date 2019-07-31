
const express = require('express');
const app = express();
const connectDB=require('./connectDB');

connectDB();
const comment=require('./comment');

app.use(express.json());

app.use('/home', function(req,res){
	res.send("Hello World");
	
});

app.use('/api/comment', comment);

//app.post('/api/famous', famous);



const server=app.listen(3000,function(){})