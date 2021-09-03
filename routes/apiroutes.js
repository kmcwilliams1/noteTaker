const app = require('express').Router();
const dbjson = require('../db/db.json');
const fs = require ('fs');
const uniqid = require ('uniqid');

app.get('/api/notes' , (req, res) => {
    console.log(dbjson);
    res.json(dbjson)
})

// POST Route for notes
    app.post('/api/notes', (req, res) =>{
        req.body.id = uniqid()
        dbjson.push(req.body)
        fs.writeFile(__dirname, "/../db/db.json" , JSON.stringify(dbjson), err => {
            if(err) throw err
        })
        res.end()
      });

// req.params.id
// .filter()

module.exports = app;