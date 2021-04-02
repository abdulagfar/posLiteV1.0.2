
import React from 'react';
import Dashboard from './views/dashboard'

var env=electron.env.getenv()


var x

export default function App() {

  return (
    <>
    <Dashboard/>
      <h1>I am App Component!!!</h1>
      <h1>test</h1>
      <button onClick={() => {
        console.log("env",env.companyName)

// console.log("env",process.env.companyName)

      electron.items.getAll("am here").then((x)=>{

        console.log(x)

// console.log(process.env.companyName)
        

      })
      
      console.log()

       
        // electron.notificationApi.sendNotification('my success!');
      }}>Notify</button>
    </>
  )
}
