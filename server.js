var express = require("express");
var path = require('path');
var PORT = 8080;

// Initialize Express
var app = express();

// Configure middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

// Start the server
app.listen(process.env.PORT || 8080, function() {
  console.log("App running on port " + PORT + "!");
});
