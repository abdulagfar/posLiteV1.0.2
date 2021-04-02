import '../css/dashboard.css';
import React from 'react';

var env=electron.env.getenv()









function Dashboard() {
   const dropdownValues = {
    values: [
      1,
      2,
      3,
      4
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-section">
          <div className="address-input-wrapper">
            <form>
              <label className="label">
                <h1>{env.companyName}</h1>
                <h2>{env.companyAddress}</h2>
                <input type="number" name="name"  placeholder="Customer phone Number" />
              </label>
              {/* <br></br> */}
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>
        </div>
        <div className="bottom-section">
          <div className="table-wrapper">
            <table className="table">
              <tr>
                <th>S/No</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Prize</th>
                <th>Prize</th>


              </tr>
              <tr>
                <td>1</td>

                <td> 
                  <div className="dropdown">
                   <select >
         {dropdownValues.values.map(time => {
           return (
             <option value={time}> {time} </option>
           )
         })}
         
    </select>
    </div>
    
    </td>
    <td>1</td>
    <td>1</td>


              
              </tr>
             
              </table>


          </div>

          </div>



      </header>
    </div>
  );
}

export default Dashboard;