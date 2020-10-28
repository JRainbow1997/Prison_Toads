import React, { Component } from 'react';
// import Story from './Story';
import './Stories.css';
import sunglassesfrog from './images/sunglassesfrog.jpg';
import tiedyetoad from './images/tiedyetoad.jpg';
import moodyfrog from './images/moodyfrog.jpg';
import toadthroat from './images/toadthroat.jpg';
import peacetoad from './images/peacetoad.jpg';
import winetoad from './images/winetoad.jpg';
import toadnmouse from './images/toadnmouse.jpg';
import jumpingtoad from './images/jumpingtoad.jpg';


class Stories extends Component {

    // state = {
    //     stories: []
    // }

    render() {
        return (
            <div className="stories-main-container">
                <div className="stories-container">
                    <img className="stories-pic" src={sunglassesfrog} alt="Frog with sunglasses on" />
                    <img className="stories-pic" src={tiedyetoad} alt="Toad with tie dye background" />
                    <img className="stories-pic" src={moodyfrog} alt="Moody brown frog" />
                    <img className="stories-pic" src={toadthroat} alt="Toad with balloon throat" />
                    <img className="stories-pic" src={peacetoad} alt="Toad doing the peace sign" />
                    <img className="stories-pic" src={winetoad} alt="Toad drinking wine" />
                    <img className="stories-pic" src={toadnmouse} alt="Toad and mouse" />
                    <img className="stories-pic" src={jumpingtoad} alt="Jumping toad" />
                </div>
            </div>
        )
    }
}

export default Stories;