var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback){
        var qry = "SELECT * FROM ??";
        connection.query(qry, [table], function(err, res){
            if(err) throw err;
            console.log(res);
           callback(res);
            
        });
    },
    insertOne: function(name_val, dev_val, callback){
        var qry = "INSERT INTO burgers (burger_name, devoured) values (?,?)";
        connection.query(qry, [name_val, dev_val], function(err, res){
            if(err)  throw err;
           callback(res);
        });
    }, 
    updateOne: function(val, b_id, callback){
        var qry = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(qry, [val, b_id], function(err, res){
            if(err) throw err;
            callback(res);
        });
    }
};

module.exports = orm;