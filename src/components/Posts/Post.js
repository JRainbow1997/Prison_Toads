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
        <div>
            <div className="Post">
                <header>
                    <div className="Post-user-avatar">
                        <img src="https://magedalqerbi.cachefly.net/p/20009/9.webp" />

                    </div>

                    <div>
                        <p className="Post-user-nickname">Kermit</p>
                    </div>
                    <div className="button-meatball">
                        <button className="postDropDown"><img className="meatballMenu" src="https://www.mathmlcentral.com/characters/glyphs/TripleDot_L.gif" alt="trippledot" /></button>
                    </div>
                </header>
                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
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
                                <strong>Kermit</strong> Pride with the froggies <span>#pride</span> <span>#love</span> <span>#frogcanlovetoads</span>
                            </div>
                        </div>

                        <Comment />

                    </div>
                </div>
            </div>

            <div className="Post">
                <header>
                    <div className="Post-user-avatar">
                        <img src="https://ih1.redbubble.net/image.895719850.7979/flat,128x128,075,f-pad,128x128,f8f8f8.jpg" />

                    </div>

                    <div>
                        <p className="Post-user-nickname">Mr. toad</p>
                    </div>
                    <div className="button-meatball">
                        <button className="postDropDown"><img className="meatballMenu" src="https://www.mathmlcentral.com/characters/glyphs/TripleDot_L.gif" alt="trippledot" /></button>
                    </div>
                </header>
                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
                <div>
                    <div className="Post-image">
                        <img className="Post-image-bg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3dVHgh3Z3jFn2t4r-C-i5joGPsR_uiino-w&usqp=CAU" />
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
                            <strong>Mr. Toad</strong> Fresh Trim <span>#freshtrim</span> <span>#outofjail</span> <span>#getmeadrink</span>
                            </div>
                        </div>

                        <Comment />

                    </div>
                </div>
            </div>


            <div className="Post">
                <header>
                    <div className="Post-user-avatar">
                        <img src="https://pm1.narvii.com/7042/815f32473e27fa0f93bd12e97d532f2912fed7d5r1-1024-815v2_128.jpg" />

                    </div>

                    <div>
                        <p className="Post-user-nickname">Princess Tiana</p>
                    </div>
                    <div className="button-meatball">
                        <button className="postDropDown"><img className="meatballMenu" src="https://www.mathmlcentral.com/characters/glyphs/TripleDot_L.gif" alt="trippledot" /></button>
                    </div>
                </header>
                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
                <div>
                    <div className="Post-image">
                        <img className="Post-image-bg" src="https://c-sf.smule.com/rs-s-sf-4/arr/11/cc/63e50696-2b2a-43d2-8ad6-2cb32cc0f02c.jpg" />
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
                            <strong>Princess Tiana</strong> Biggest mistake of my life <span>#menaretheworst</span> <span>#dontfallforafrog</span>
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

