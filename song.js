const express = require('express');
const router = express.Router();



const Song=require('./models/song');
const Artist=require('./models/artist');



router.post('/famous',async(req,res) => {

	
    Song.aggregate([
        {
            $project: { 
                fullName:{$split: ["$artist"," "]} ,
                title:1,
                artist:1,
                album:1,
                genre:1

            },
        },
        { $lookup:
            {
                from: 'artist',
                localField: '',
                foreignField: 'firstName',
                as : 'artist_details'
            },
        }
    ],
	function(err, doc){
		if (err) return res.sendStatus(500, { error: err });
        return res.json(doc);
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
    



    /* Song.aggregate({
        {
            $project: { 
                fullName:{$split: ["$artist"," "]} ,
                title:1,
                artist:1,
                album:1,
                genre:1

            }
        },
        { $lookup:
           {
             from: 'artists',
             localField: '$fullName[0]',
             foreignField: 'firstName',
             as: 'orderdetails'
            },
        },
        {
             $unwind: "$orderdetails"
         },{
         $project: { 
             fullName:{$split: ["$artist"," "]} ,
             title:1,
             artist:1,
             album:1,
             genre:1

         }},
         {
             $match:{
                 isFamous: 1
             }
         },}*/
});



router.post('/',async(req,res) => {

	Song.find(
	function(err, doc){
		if (err) return res.sendStatus(500, { error: err });
        return res.json(doc);
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