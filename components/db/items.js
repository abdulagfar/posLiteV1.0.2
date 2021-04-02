const { updateRow } = require("electron-db");
const db =require("./db")
exports.test =db.itemTableLocation
console.log("itemdb",db.itemTableName)

function insert(pName,price,qty=0,details='',discount=0){
    let obj = new Object();

obj.pName = pName;
obj.price = price;
obj.qty=qty
obj.details=details
obj.discount=discount

if (db.dbConnection.valid(db.itemTableName,db.itemTableLocation)) {
  db.dbConnection.insertTableContent(db.itemTableName,db.itemTableLocation, obj, (succ, msg) => {
    // succ - boolean, tells if the call is successful
    console.log("Success: " + succ);
    console.log("Message: " + msg);
  })
}
}

 function  getAllItems(){
     var x
    if (db.dbConnection.valid(db.itemTableName,db.itemTableLocation)) {
        db.dbConnection.getAll(db.itemTableName,db.itemTableLocation, (succ, data) => {
          x=data
          
        })
        var obj=x
        return obj
      }  

      else{
          return []
      }


}

function searchBypName(key){
    var obj

    db.dbConnection.search(db.itemTableName,db.itemTableLocation, 'pName', key, (succ, data) => {
        if (succ) {
            obj=data
        //   console.log(data);
        }
        else{
            obj= null
        }
      });
      return obj
}

function updateById(id,pName,price,qty=0,details='',discount=0){
    let where = {
        "id": id
      };
      
      let set = {
        "pName":pName ,
        "price": price,
        "qty": qty,
        "details": details,
        "discount": discount,

      }
      
      db.dbConnection.updateRow(db.itemTableName,db.itemTableLocation, where, set, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
      });
}


function deleteById(id){
    db.deleteRow(db.itemTableName,db.itemTableLocation, {'id': id}, (succ, msg) => {
        console.log("deletion:",msg);
      });

}




module.exports = {
    insert,getAllItems,searchBypName,updateById,deleteById
  }



