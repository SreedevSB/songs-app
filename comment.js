const express = require('express');
const router = express.Router();



const Song=require('./models/song');
const User=require('./models/user');
const Artist=require('./models/artist');


router.post('/',async(req,res) => {


	Song.findOneAndUpdate(query, {
		$push: { "comments" :
				{ 
					"user" : req.body.name, 
					"comment" : req.body.comment
				}
		}
	}, 
	{upsert:false}, 
	function(err, doc){
		if (err) return res.sendStatus(500, { error: err });
		return res.send("succesfully saved");
	});
	
/*
	const song= new Song({
		title: 'I don\'t know my name',
		artist: 'Grace Vanderwall',
		albumName: 'Remix',
		genre: 'Acoustic' 
	});
	await song.save();
	res.json(song);*/
});

module.exports=router;

/*
 */