import React, {Component} from 'react';
import './App.css';
// import Post from './components/Posts/Post';
import Wartbutton from './components/Posts/Wartbutton';
import Stories from './components/Stories/Stories'
// import Comment from './components/Posts/Comment'



class App extends Component {


  render () {
    return (
      <div>
          <Stories />
          <Wartbutton/>
          
       </div>     
          
    );
  }
}

export default App;