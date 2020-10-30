import React from 'react';
import '../Posts/Post.css';
import Comment from './Comment'

// import Dropdown from 'react-dropdown';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';



const Post = (props) => {

    // const options = [
    //     'one', 'two', 'three'
    // ];

    // const defaultOption = options[0];


    return (
        <div className="Post">
            <header>
                <div className="Post-User">
                    <div className="Post-user-avatar">
                        <img src="https://magedalqerbi.cachefly.net/p/20009/9.webp" />
                    </div>
                    <div className="Post-user-nickname">
                        <span>Kermit</span>
                    </div>
                </div>
            </header>

            {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;

                    <div className="button-meatball">
                        <button className="postDropDown"><img className="meatballMenu" src="https://www.mathmlcentral.com/characters/glyphs/TripleDot_L.gif" alt="trippledot" /></button>
                    </div> */}

            <div>
                <div className="Post-image">
                    <img className="Post-image-bg" src="https://cdn131.picsart.com/318968072360201.jpg?type=webp&to=crop&r=256" />
                    <div className="afterPicture">
                        <div className="postIcons">
                            <div className="icon1-3">
                                <button type="submit" className="wartsbutton" onClick={props.addToWart}>🐸</button>
                                
                                <p className="FA"><FaRegComment /></p>
                                <p className="FA"><FiSend /> </p>
                                
                            </div>
                            <p className="bookmark"><FiBookmark /></p>
                        </div>



                        <p className="wartsText"><span>{props.warts}</span>  Warts</p>

                        <div className="Post-caption" >
                            {/* <p className="Post-caption"><a className="username" href="google.com"> Kermit </a> Just chilling at pride </p> */}
                            <strong>Kermit</strong> Pride with the froggies
                        </div>
                    </div>

                    <Comment />

                </div>
            </div>
        </div>

    )

}
export default Post;

