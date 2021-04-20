// required packages

const fs = require('fs')
const express = require('express')
const path = require('path')

// Port number
const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/notes", function (req, res) {
    console.log(__dirname)
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/notes", function(req, res) {
    console.log("from api notes route")
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      console.log(data);

      const arr = JSON.parse(data);
      res.json(arr)
    });
})


//html


 app.post("/api/notes", function (req, res){
     const key = req.body
     fs.readFile("./db/db.json", (err, data) => {
        if(err) throw err;
        console.log(data)
        
        const arr = JSON.parse(data)
        arr.push(key)

        console.log(arr)

        fs.writeFile("./db/db.json", JSON.stringify(arr), (err) => {
            if(err){
                console.log(err)
            }
            console.log('successful')
        })
    });
})

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
  
});
