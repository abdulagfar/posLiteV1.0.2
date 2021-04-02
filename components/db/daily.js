const { updateRow } = require("electron-db");
const db =require("./db")
exports.test =db.dailyTablelocation
console.log("itemdb",db.dailyTableName)


function insert(billId,billItem=[],tQty=0,total,custemerNumber=''){
    let obj = new Object();

obj.billid = billId;
obj.billItem = billItem;
obj.tQty=tQty
obj.total=total
obj.custemerNumber=custemerNumber
obj.date=new Date()
if (db.dbConnection.valid(db.dailyTableName,db.dailyTablelocation)) {
  db.dbConnection.insertTableContent(db.dailyTableName,db.dailyTablelocation, obj, (succ, msg) => {
    // succ - boolean, tells if the call is successful
    console.log("Success: " + succ);
    console.log("Message: " + msg);
  })
}
}




 function  getByDay(day){
     var x
    if (db.dbConnection.valid(day,db.dailyTablelocation)) {
        db.dbConnection.getAll(day,db.dailyTablelocation, (succ, data) => {
          x=data
          
        })
        var obj=x
        return obj

      }  
      else
      {
          console.log("no data found")
          return []
      }

}

function deleteById(id){
  db.deleteRow(db.dailyTableName,db.dailyTableName, {'id': id}, (succ, msg) => {
      console.log("deletion:",msg);
    });

}



// updateById(1616869891531,"Samoosa",20,30)





module.exports = {
    insert,getByDay,deleteById
  }



