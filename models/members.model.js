const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required:true        
    },
    email: {
        type: String,
        required:true        
    },
    
})
const memberModel =
    mongoose.model("members", memberSchema);
module.exports = memberModel;