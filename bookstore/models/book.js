var mongoose = require('mongoose'); 

//Book Schema
var bookSchema = mongoose.Schema({
    title: {
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

module.exports.addBook = function(book , callback){
    Book.create( book, callback)
}

module.exports.updateBook = function(id, book , options , callback ){
    var query = {_id: id};
    var update = { 
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages
    }
    Book.findOneAndUpdate(query , update , options,  callback)
    
}