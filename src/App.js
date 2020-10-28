import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stories from './components/Stories';


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
      <React.Fragment>
        
        <BrowserRouter>        
          <Navbar basketNumbers = {this.state.basket} />
          <Stories />
          <Switch>
            <Route exact path = "/" render = {() => <Home addToWart= {this.addToBasket} basketNumbers = {this.state.basket} />} />
            <Route exact path = "/about" component = {About} />
          </Switch>
                
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

