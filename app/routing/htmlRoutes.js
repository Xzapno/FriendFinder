// DEPENDENCIES - Path package is required in order to get correct file paths

var path = require("path");

// ROUTING - When user requests a page the correct html page will be shown

module.exports = function(app) {
console.log(__dirname,  "Test");
  
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));

    // If no matching route is found default to home

    app.get("/app/public/home", function(req, res){
      res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    });
  };

