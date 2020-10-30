import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar'
import Stories from './components/Stories/Stories';
import Sidebar from './components/Sidebar/Sidebar';
import Wartbutton from './components/Posts/Wartbutton';

class App extends Component {


  render() {
    return (
      <div>
        <div className="navbar">
          <NavBar />
        </div>
        
          <div className="stories">
            <Stories />
          </div>
          <div className="main">
            <div className="post">
              <Wartbutton />
            </div>
          
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
