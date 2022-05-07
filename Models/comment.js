const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "body": {type:String, required:true},
    "timestamps":{type:String, required:true}
})

module.exports = mongoose.model('publication',publication);