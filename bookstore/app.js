var express = require('express');
var app = express() 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json())

var Book = require("./models/book")

var Genre = require("./models/genres")
mongoose.connect('mongodb://localhost/bookstore' , { useNewUrlParser: true })
var db = global.connection

app.get('/', function(req,res){
    res.send('Please use /api ')
}); 

app.get('/api/genres', function(req,res){
    Genre.getGenres(function(error, genres){
        if(error){
            throw error; 
            
        }
        res.json(genres)
    })
    
})
app.get('/api/books', function(req,res){
    Book.getBooks(function(error, books){
        if(error){
            throw error; 
            
        }
        res.json(books)
    })
    
})

app.get('/api/books/:_id', function(req,res){
    Book.getBookById(req.params._id,function(error, book){
        if(error){
            throw error; 
            
        }
        res.json(book)
    })
    
});

app.post('/api/genres', function(req,res){
    var genre = req.body;
    
    Genre.addGenre(genre, function(error, genre){
        if(error){
            throw error; 
            
        }
        res.json(genre)
    })
    
});
app.put('/api/genres/:_id', function(req,res){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(error, genre){
        if(error){
            throw error; 
            
        }
        res.json(genre)
    })
    
});

app.post('/api/books', function(req,res){
    var book = req.body;
    
    Book.addBook(book,function(error, book){
        if(error){
            throw error; 
            
        }
        res.json(book)
    })
    
});


app.put('/api/books/:_id', function(req,res){
    var id = req.params._id;
    var book = req.body;
    
    Book.updateBook(id, book, {}, function(error, book){
        if(error){
            throw error; 
            
        }
        res.json(book)
    })
    
});




app.listen(process.env.PORT, process.env.IP)
console.log('Running on my port')