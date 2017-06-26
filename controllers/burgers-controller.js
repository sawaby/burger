var express = require("express");

var router = express.Router();
var app = express();
// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    //res.write(req.body.burger_name);
    var hasObject = {
      Burgers: data
    };
    console.log(hasObject);
    res.render("index", hasObject);
    
  });
});
app.use("/", function(req, res){
    burgers.all(function(data){
        res.json(data);
    });
});
router.post("/", function(req, res) {
  burgers.insert([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});


router.put("/", function(req, res) {
  var b_id = req.params.id;

  console.log("Burger id: ", b_id);

  burgers.update({
    devoured: req.body.devoured
  }, b_id, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
