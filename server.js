// DEPENDENCIES - NPM packages required for server functionality

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION - This setsup the basic properties of the Express Server

// Tells node that we are creating an "Express" server
var app = express();

// Setup port for listner

var PORT = process.env.PORT || 8080;

// Setup the Express app to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



// ROUTER - Points server to to a series of "route" files to give server a "map" of responses for user requests

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER - Starts listening on server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});










