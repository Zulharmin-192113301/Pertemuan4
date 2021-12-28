//App.js

import React, { Component } from 'react';
import './css/bootstrap.min.css';
import Home from './views/Home/Home'
import About from './views/About/About'
import Help from './views/Help/Help'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
   
  return (
    <Router>
        <div>
          <Link to='/home'>Home</Link> &nbsp;
          <Link to='/about'>About</Link> &nbsp;
          <Link to='/help'>Help</Link> &nbsp;

          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/help' exact component={Help} />

        </div>
    </Router>

  );
}
}




export default App;
