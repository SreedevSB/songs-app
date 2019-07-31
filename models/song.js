const mongoose=require('mongoose');

mongoose.set('useFindAndModify', false);
const songSchema = new mongoose.Schema({
	title: String,
	artist: String,
	albumName: String,
	genre: String
},{strict : false});

let songModel = mongoose.model('Song',songSchema);

module.exports=songModel;