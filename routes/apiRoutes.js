const data = require("../db/db.json");
const path = require('path');
const fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(data);
      });

    app.post("/api/notes", function(req, res) {
      req.body.id = data.length;
      data.push(req.body);

      res.json({message:"You have a new note!"})
    });

    app.delete("api/notes/:id", function(req, res){

      data.splice(req.params.id, 1);
      
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err){

        if (err) {
          return console.log(err);
        }

        console.log("Success!");

      });

      res.json({Message:"you have deleted a note"});

    });
};