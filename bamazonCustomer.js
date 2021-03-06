

var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection =mysql.createConnection({
    host:"localhost",
    port:3306, 
    user:"root",
    password:"jingle2849",
    database: "bamazon"


});

connection.connect(function(err) {
    if(err) throw err; 
    displayProducts();
    
});

function displayProducts() {
    connection.query(
        "select * from products",
        function(err,res) {
            if(err)
            console.log("error")
            console.table(res);
            initiate();
        }
    )
}

function initiate(){
    inquirer
    .prompt([
        {
        name: "itemID",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
    },
    
    {
        name: "itemQuantity",
        type: "input",
        message: "How many units of the product would you like to buy?",
       
           
   
    }]) .then(function(answer) {
       
        var itemID = answer.itemID;
        var itemQuantity = answer.itemQuantity;
        checkQuantity(itemID, itemQuantity);
    })
      
    }  

    function checkQuantity(id, qty) {
        connection.query(
            "select * from products where item_id = ?",
            [id],
            function(err,res) {
                if(err)
                console.log("error");
                var currentQuantity =res[0].stock_quantity;
                if (qty<=currentQuantity) {
                    completePurchase(id, qty);
                }else {
                    console.log("Insufficent Quantity");
                    displayProducts();
                }

            }
        )
    }

    function completePurchase(id, qty){
        // checkQuantity(id, qty);
        connection.query(
            "update products set stock_quantity = stock_quantity - ? where item_id = ?",
            [qty,id],
            function(err,res) {
                if(err)
                console.log("error");
                console.log("Thank you for purchasing" + qty + "of item id" + id);
                displayProducts();
            }
        )

    }
   