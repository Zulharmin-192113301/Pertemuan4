//App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    var ktp = {
      nama : 'yanto',
      nik : '1920121213134',
      tinggal : 'medan'
    }
  
  
    
  return (
    <table>
      <tr>
        <td>
          Nik
        </td>
        <td>
          :
        </td>
        <td>
          {ktp.nik}
        </td>
      </tr>

      <tr>
        <td>
          Nama
        </td>
        <td>
          :
        </td>
        <td>
          {ktp.nama}
        </td>
      </tr>

      <tr>
        <td>
          Tempat Tinggal
        </td>
        <td>
          :
        </td>
        <td>
          {ktp.tinggal}
        </td>
      </tr>

    </table>
  )
}
}




export default App;
