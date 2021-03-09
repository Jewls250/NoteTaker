// required packages

const fs = require('fs')
const express = require('express')
const path = require('path')

// Port number
const PORT = 3000;

const app = express()

app.use(express.static("public"));

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, 'notes.html'));
})

//html

stuck..
// app.post("/api/notes", function (req, res){
//     const key = req.body
// })



//
app.post()