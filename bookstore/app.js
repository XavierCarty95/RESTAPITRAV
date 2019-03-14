var express = require('express');
var app = express() 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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
app.listen(process.env.PORT, process.env.IP)
console.log('Running on my port')