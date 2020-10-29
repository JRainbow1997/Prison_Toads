import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Story from './Story';
import './Stories.css';
import tiedyetoad from './images/tiedyetoad.jpg';
import tonguefrog from './images/tonguefrog.jpg';
import toadthroat from './images/toadthroat.jpg';
import peacetoad from './images/peacetoad.jpg';
import winetoad from './images/winetoad.jpg';
import toadnmouse from './images/toadnmouse.jpg';
import jumpingtoad from './images/jumpingtoad.jpg';
import flowertoad from './images/flowertoad.jpg';
import africanfrog from './images/africanfrog.jpg';

const lightboximages = [
    './images/tiedyetoad.jpg',
    './images/tonguefrog.jpg',
    './images/toadthroat.jpg',
    './images/peacetoad.jpg',
    './images/winetoad.jpg',
    './images/toadnmouse.jpg',
    './images/jumpingtoad.jpg',
    './images/flowertoad.jpg',
    './images/africanfrog.jpg'
];

class Stories extends Component {

    state = {
        stories: [
            { storyImage: tiedyetoad },
            { storyImage: tonguefrog },
            { storyImage: toadthroat },
            { storyImage: peacetoad },
            { storyImage: winetoad },
            { storyImage: toadnmouse },
            { storyImage: jumpingtoad },
            { storyImage: flowertoad },
            { storyImage: africanfrog }
        ],
        isOpen: false,
        photoIndex: 0
    }

    handleShowLargeImage = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log("clicked");
    }

    render() {

        const allStories = this.state.stories.map( (story) => {
            return (
                <Story storyImage={story.storyImage} onClick={this.handleShowLargeImage} />
            )
        });

        const { photoIndex, isOpen } = this.state;

        return (
            <div className="main-stories-container">
                <div className="stories-container">
                    <button type="button" onClick={() => this.setState({
                        isOpen: true
                    })}>Open</button>
                    {isOpen && (
                        <Lightbox
                            mainSrc={lightboximages[photoIndex]}
                            nextSrc={lightboximages[(photoIndex + 1) % lightboximages.length]}
                            prevSrc={lightboximages[(photoIndex + lightboximages.length - 1) % lightboximages.length]}
                            onCloseRequest={() => this.setState({
                                isOpen: false
                            })}
                            onMovePrevRequest={() => this.setState({
                                photoIndex: (photoIndex + lightboximages.length - 1) % lightboximages/length,
                            })
                        }
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % lightboximages.length,
                        })
                    }
                    />
                    )}
                    <div className="image-frame">
                        { allStories }
                    </div>
                </div>
            </div>
        )
    }
}

export default Stories;