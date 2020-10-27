import React from 'react';


const Stories = (props) => {
    
    return(
        <div className = "story">
            <div className = "products">
                <div className ="product">
                    <h3>Merlot</h3>
                    <button onClick= {props.addToCart}>Add to cart</button>
                </div>
            </div>            
        </div>
    )

}






export default Stories