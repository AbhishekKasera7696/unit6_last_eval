const mongoose = require('mongoose');

const book = new mongoose.Schema({
    "likes": {type:Number, required:true},
    "coverImage":{type:String, required:true},
    "content":{type:Number, required:true},
    "timestamps": {type:String, required:true},
    "userId": { type: mongoose.Types.ObjectId, ref: 'userModel' }
});

module.exports = mongoose.model('book', book);