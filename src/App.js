import React, {Component} from 'react';
import './App.css';
import Post from './components/Post';
import Stories from './components/Stories'



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
        {/* <NavBar /> */}
        <Stories />
        <Post addToWart= {this.addToBasket} basketNumbers = {this.state.basket} />
      </div>
    );
  }
}

export default App;