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
    const allHashtags = props.postHashtag.map((hastag) => {
        return <span>{hastag}&nbsp;</span>
    })
    return (
        <div>
            <div className="mainPost">
                <header>
                    <div className="Post-user-avatar">
                        <img src="userimage" src={props.userAvatatImg} alt="userimage" />
                    </div>
                    <div>
                        <p className="Post-user-nickname">{props.userNickname}</p>
                    </div>
                    <div className="button-meatball">
                        <button className="postDropDown"><img className="meatballMenu" src="https://www.mathmlcentral.com/characters/glyphs/TripleDot_L.gif" alt="trippledot" /></button>
                    </div>
                </header>
                <div>
                    <div className="Post-image">
                        <img className="Post-image-bg" src={props.postImage} />
                        <div className="afterPicture">
                            <div className="postIcons">
                                <div className="icon1-3">
                                    <button type="submit" className="wartsbutton" onClick={props.addToWart}>🐸</button>
                                    <p className="FA"><FaRegComment /></p>
                                    <p className="FA"><FiSend /> </p>
                                    <p className="bookmark"><FiBookmark /></p>
                                </div>
                                
                            </div>
                            <p className="wartsText"><span>{props.warts}</span>  Warts</p>
                            <div className="Post-caption" >
                                <strong>{props.userNickname}</strong> {props.postCaption} &nbsp;{allHashtags}
                            </div>
                        </div>
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;