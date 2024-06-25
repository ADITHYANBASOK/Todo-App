
const mongoose = require('mongoose');
 
const StudentSchema = new mongoose.Schema({
    Email: {type:String},
    password: {type:String}, 
});
 
module.exports = mongoose.model('login', StudentSchema);