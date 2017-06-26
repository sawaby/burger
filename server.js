var express = require("express");
var override = require("method-override");
var bodyparser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();
var path = require("path");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(override("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers-controller.js");

app.use("/", routes);





// // Routes
// // =============================================================
// module.exports = function(app) {

//   // Index route loads index.html
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname + "../public/index.html"));
//   });

// };
app.listen(PORT);
