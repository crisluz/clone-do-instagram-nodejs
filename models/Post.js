const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

author: String,
place: String,
descriptrion:String,
hashtags:String,
image:String,
likes:{ 
 type:Number,
 defaut:0,
}
},{ 
 timestamps:true,
}); 


module.exports =  mongoose.model('Post',PostSchema);