
const main =require('../main')
console.log(main) 

module.exports = {
  menuTemplet: [
      {
        label: "File",
        submenu:[
          {
            label:"Admin Portal",
            accelarator:"Ctrl+a",
            
            click() {}

            
          },
          {
            label: "New Bill",
            accelarator:"Ctrl+n",

            click(){
              console.log("new bill")
        main.createWindow()
    
            }
          },
          
          {
            label: "Print",
            accelarator:"Ctrl+P",

            click(){
              console.log("Print")

    
            }
          }
          

        ]
    
      }
      ,
      {
        label:"Dev Tool",
        submenu:[
          {
            label:"Inspect",
            accelarator:'Ctrl+i',
            click(item,focusedWindow){
              focusedWindow.toggleDevTools()
            }
          }
        ]
  
        }
      
    ],
    dndn:()=>{
      return "be happy"
    }
 
}

console.log("in",module.exports.menuTemplet)

