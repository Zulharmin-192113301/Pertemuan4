//App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    var angka = [1,2,3];
    var nama = ['andi', 'budi', 'tono'];
    var campuran = ['andi',1,'budi',2,'tono',3];
  
  
    
  return (
    <div>
      Isi array angka
      <ul>
        {angka.map((item, index)=>(
        <li>
          Index ke -{index} : {item}
        </li> ))}
      </ul>

      <ul>
        {nama.map((item, index)=>(
        <li>
          Index ke -{index} : {item}
        </li> ))}
      </ul>

      <ul>
        {campuran.map((item, index)=>(
        <li>
          Index ke -{index} : {item}
        </li> ))}
      </ul>
    </div>
  )
}
}

export default App;