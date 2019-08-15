
const express = require('express');
const app = express();
const connectDB=require('./connectDB');

connectDB();
const comment=require('./comment');
const song=require('./song');

app.use(express.json());

app.use('/home', function(req,res){
	res.send("Song app");
	
});

app.use('/api/comment', comment);
app.use('/api/song', song);

//app.post('/api/famous', famous);

const port=process.env.PORT || 3000
const server=app.listen(port,function(){})
