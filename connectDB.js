const mongoose=require('mongoose');

const dburl="mongodb+srv://root:root@cluster0-xndp7.mongodb.net/test?retryWrites=true&w=majority";
const connectDB= async ()=>{
	try{
		await mongoose.connect(dburl,{
			useNewUrlParser: true
		});
		console.log("DB Connected");
	}catch(err){
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;