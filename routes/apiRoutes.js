var notes = require("..db/db")

module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
      });
    
}