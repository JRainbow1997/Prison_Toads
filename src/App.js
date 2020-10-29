import React, {Component} from 'react';
import './App.css';
import Post from './components/Posts/Post';
import Stories from './components/Stories/Stories';
import Sidebar from './components/Sidebar/Sidebar';



class App extends Component {

  state = {
    basket: 0
  }

  addToBasket = () => {
    this.setState({
      basket: this.state.basket +1
    })
  }

  render () {
    return (
      <div>
          <Stories />
          <Post addToWart= {this.addToBasket} basketNumbers = {this.state.basket} />
          <Sidebar />
       </div>     
          
    );
  }
}

export default App;