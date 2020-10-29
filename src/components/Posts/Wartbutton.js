import React, {Component} from 'react';
import Post from './Post'


class Wartbutton extends Component {

    state = {
      warts: 0,
      pressed: false
    }
  
    getWarts () {
      const pressed = this.state.pressed
      if(pressed) {
        this.setState({warts: this.state.warts -1, pressed:false});
      } else {
        this.setState({warts: this.state.warts +1, pressed:true})
      }
    }
  
  
    render () {
      return (
        <div>
            <Post addToWart= {this.getWarts.bind(this)} warts = {this.state.warts} />
            
         </div>     
            
      );
    }
  }
  
  export default Wartbutton;