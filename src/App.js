//App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    var infoumur = [
      {nama:'Budi',umur:54},
      {nama:'Doni',umur:23},
      {nama:'Yanto',umur:41},
      {nama:'Desi',umur:30}
    ]
    
  return (
    <table border='2'>
      <thead>
        <tr>
          <th>
            No.
          </th>
          <th>
            Nama
          </th>
          <th>
            Umur
          </th>
        </tr>
      </thead>
      <tbody>

        {infoumur.map((item,index) =>(
          <tr key={index}>
            <td>
              {index +1}
            </td>
            <td>
              {item.nama}
            </td>
            <td>
              {item.umur}
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}
}




export default App;
