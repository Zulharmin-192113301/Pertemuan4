//App.js

import React, { Component } from 'react';
import './css/bootstrap.min.css';

class App extends Component {
  constructor(){
  super();

  this.state = {
    info : [],
    nama : null,
    kelas : null,
    nilai : null
  }
}

  setvalueState (event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  addData() {
    var data_tmp = this.state.info;
    data_tmp.push({nama : this.state.nama, kelas : this.state.kelas, niai : this.state.nilai});
    this.setState ({
      info : data_tmp
    })
  }
  

  render() {
   
  return (

    <div className='container'>
      <div className='form-container'>
        <div className='form-group'>
          <label>Nama:</label>
          <input type='text' name='nama' value={this.state.nama} onChange={this.setvalueState.bind(this)} className='form-control' />
        </div>

        <div className='form-group'>
          <label>Kelas:</label>
          <input type='text' name='kelas' value={this.state.kelas} onChange={this.setvalueState.bind(this)} className='form-control' />
        </div>

        <div className='form-group'>
          <label>Nilai:</label>
          <input type='number' name='nilai' value={this.state.nilai} onChange={this.setvalueState.bind(this)} className='form-control' />
        </div>

        <button onClick={this.addData.bind(this)} type='button' className='btn btn-success'> Masukkan</button>
      </div>

      <br/>
  {/*cetak info siswa */}

      <table className='table'>
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>
              Nama
            </th>
            <th>
              Kelas
            </th>
            <th>
              Nilai
            </th>
          </tr>
        </thead>

        <tbody>
            {this.state.info.map((info, index)=> (
              <tr key={index}>
                <td>
                  {index +1}
                </td>
                <td>
                  {info.nama}
                </td>
                <td>
                  {info.kelas}
                </td>
                <td>
                  {info.nilai}
                </td>
              </tr>
            ))}
            
        </tbody>




      </table>

    </div>

  )
}
}




export default App;