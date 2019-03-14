var mongoose = require('mongoose'); 

//Book Schema
var bookSchema = mongoose.Schema({
    titke: {
        type: String, 
        required: true 
        
    }, 
    
    genre:{
        type: String, 
        required: true
    },
    description:{
        type: String
    },
    
    author:{ 
        type: String, 
        required: true
    },
    
    publisher: {
        type: String, 
        required: true
    },
    
    pages: {
        type: String
    },
    
    image_url:{
        type : String
    },
    
    create_date: {
        type: Date, 
        default: Date.now
    }
    
}); 

var Book = module.exports = mongoose.model("Books" , bookSchema)


//Get Genres 
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
    
}

module.exports.getBookById = function(id, callback){
    Book.findById(id,callback);
}