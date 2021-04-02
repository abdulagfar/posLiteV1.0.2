const { app, BrowserWindow } = require("electron");
const dbConnection = require('electron-db');
const path = require('path')
console.log("inside db")



function createTable(tableName,location) {

    try {
    
        if (!(dbConnection.tableExists(tableName, location))){
            console.log("table excisit?",dbConnection.tableExists(tableName, location))
            dbConnection.createTable(tableName, location, (succ, msg) => {
                // succ - boolean, tells if the call is successful
                if (succ) {
                  console.log(msg)
                } else {
                  console.log('An error has occured. ' + msg)
                }
              })
          }
        else{
            console.log("table", tableName,"already created")
        }
            
        }
          catch(err) {
            console.log(err.message);
          }
        
        
    }




//creating item table
var itemTableName='items'
var itemTableLocation=path.join(__dirname, '../../db')
createTable(itemTableName,itemTableLocation)
 

// Creating daily table


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
// This will save the database in the same directory as the application.
var d = new Date();
var dailyTableName=dd+mm+yyyy;
console.log("table name",dailyTableName)
const dailyTablelocation = path.join(__dirname, '../../db/daily/')
createTable(dailyTableName,dailyTablelocation)



module.exports = {
  dbConnection,itemTableName,itemTableLocation,dailyTableName,dailyTablelocation
}

