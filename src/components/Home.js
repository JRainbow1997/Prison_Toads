import React from 'react';
import '../components/Home.css';


const Home = (props) => {
    
    return(
        <div className = "home">
            <h1>Welcome to my shop</h1>
            <h2>Products</h2>
            <div className = "products">
                <div className ="product">
                    <h3>Kermit</h3>
                    <p>Just chilling with me and miss piggy</p>
                    <img src="https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:126462?height=506&width=900&format=jpg&quality=.7" />
                    <button onClick= {props.addToWart}>🐸</button>
                    <p>Warts: <span>{props.basketNumbers}</span></p>
                                    
                </div>
            </div>            
        </div>
    )

}


export default Home;