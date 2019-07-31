const mongoose=require('mongoose');

const artistSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	isFamous: Boolean
});

module.exports=mongoose.model('Artist',artistSchema);