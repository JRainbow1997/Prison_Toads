import React, {Component} from 'react';
import './App.css';
import Post from './components/Post';



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
      
            <Post addToWart= {this.addToBasket} basketNumbers = {this.state.basket} />
            
          
    );
  }
}

export default App;

