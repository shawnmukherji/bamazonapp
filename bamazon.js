//require inquirer

var inquirer = require('inquirer')



//require mysql
var mysql = require('mysql');


//link to MySQL database 
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'wes',
    database: 'bamazondb'
});

//display all items in the database and log result to user

connection.query('SELECT * FROM Products',  function (err, res){


    if(err) throw err;
    
    console.log('Check out the goods! \n')


    //loop thru database and display results

    var itemID = res[i].itemID + ''; //convert into string

    var productName = res[i].productName + '';

    var departmentName = res[i].departmentName + '';

    var price = res[i].price + '';
})

console.log(itemID + '|' + productName + '|' + departmentName + '|' + price + '|    ' + quantity);




//after table is shown, inquirer asks customer to buy products

inquirer.prompt();

//ask for item ID

console.log('Which item do you want to buy?');
inquier.get(['buyItemID']), function (err, result);


//ask for quantity


//show quantity selected


//once customer has place order, check if store has enough quantity

        // Update mySQL database with reduced inventory
            var newInventory = parseInt(bamazonQuantity) - parseInt(buyItemQuantity); // ensure we have integers for subtraction & database
            connection.query('UPDATE Products SET ? WHERE ?', [{StockQuantity: newInventory}, {ItemID: buyItemID}], function(err, res){
              if(err) throw err; // Error Handler
            }); // end inventory update query


            // Show customer their purchase total (need to query the price info from database)
            var customerTotal;
            connection.query('SELECT Price FROM Products WHERE ?', [{ItemID: buyItemID}], function(err, res){
              
              var buyItemPrice = res[0].Price;
              customerTotal = buyItemQuantity*buyItemPrice.toFixed(2);

              console.log('\nYour total is $' + customerTotal + '.');


//establish connection to create product 
connection.connect(function(err){
    console.log(err)
    createProduct();
});

//creating a new product (part of amazon manager)
function createProduct(){
    var query = connection.query(
        'insert into products set ?',
        {
            product_name: 'shake weight',
            department_name: 'fitness',
            price: 19.99,
            stock_qty: 999
        },
        function(err, res){
            console.log(res.affectedRows + '')
        }
    )
}