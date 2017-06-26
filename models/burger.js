// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insert: function(n_vals,d_vals, callback){
        orm.insertOne(n_vals, d_vals, function(res){
            callback(res);
        });
    },
    update: function(val, b_id, cb) {
        orm.update(val, b_id, function(res) {
            callback(res);
        });
  }
}
module.exports = burger;