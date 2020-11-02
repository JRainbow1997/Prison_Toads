import React, {Component} from 'react';
import './App.css';
import Stories from './components/Stories/Stories';
import Sidebar from './components/Sidebar/Sidebar';
import Wartbutton from './components/Posts/Wartbutton';
// import Comment from './components/Posts/Comment'



class App extends Component {


  render () {
    return (
      <div>
          <Stories />
          <Sidebar />
          <Wartbutton/>
       </div>
    );
  }
}

export default App;