import React from 'react';
import '../Posts/Post.css';
import Comment from './Comment'
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';



const Post = (props) => {
    
    return(
        <div className ="post">
            <div className="postTop">
                <div className="icon-name">
                    <h3><img className="icon" src="https://magedalqerbi.cachefly.net/p/20009/9.webp" /> Kermit</h3>
                </div>
                <div className="button-meatball">
                    <button className="postDropDown"><img className="meatballMenu" src="https://www.mathmlcentral.com/characters/glyphs/TripleDot_L.gif" alt="trippledot"/></button>
                </div>
            </div>

            <div>
                <div>
                    <img className="postPicture" src="https://cdn131.picsart.com/318968072360201.jpg?type=webp&to=crop&r=256" />
                    <div className="postOptions">
                        <input id="toggle-heart" type="checkbox" />
                        <label for="toggle-heart">𓆏</label>
                        <button className="wartsbutton" onClick= {props.addToWart}>🐸</button>
                        <p><FaRegComment /></p>
                        <p><FiSend /> </p> 
                        <p className="bookmark"><FiBookmark /></p> 
                    </div>
                 </div>
                <p><span>{props.basketNumbers}</span>  Warts</p>

                {/* <div className="savedComments">
                <p className="username">Miss piggy</p>   
                <p>Just chilling with me and miss piggy</p>
                </div> */}
                <Comment />
                                           
            </div>
        </div>            
        
    )

}
export default Post;