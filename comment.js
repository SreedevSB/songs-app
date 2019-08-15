const express = require('express');
const router = express.Router();



const Song=require('./models/song');
const User=require('./models/user');
const Artist=require('./models/artist');


//middlware function to check if a user comments more than one time for a  song
router.use(function (req,res,next){
	Song.find({
		$and:[		
			{"title" : req.body.title},
			{"comments" :{ 
				$elemMatch :{
						"user" : req.body.name
				}
			}}
		]
	}, 
	function(err, doc){
		if (err) return res.sendStatus(500, { error: err });
		console.log(doc);
		if(doc.length){
			res.send("No multiple comments allowed;")
		}else{
			next();
		}
	});
});



router.post('/',async(req,res) => {

	var query = {'title' : req.body.title};
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