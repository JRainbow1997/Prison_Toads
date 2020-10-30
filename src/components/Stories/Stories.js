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
    'https://nypost.com/wp-content/uploads/sites/2/2019/09/toadimage.jpg?quality=80&strip=all',
    'https://i.pinimg.com/originals/2f/be/f6/2fbef6cbc36d79fd310d83cb2a897bc4.jpg',
    'https://3.bp.blogspot.com/-T9pQ0Iy3Qs4/T2jymXfVRSI/AAAAAAAAOFE/AeooqSVIL0U/s1600/3.jpg',
    'https://i.pinimg.com/originals/87/5a/0e/875a0ed81e345e5d45edb19fc2e60748.jpg',
    'https://www.sallymitchell.com/prodimg/13696-F_1_Zoom.jpg',
    'https://www.nationalgeographic.com/content/dam/news/rights-exempt/legacy-news/2006/07/060705-mouse-frog_big.ngsversion.1533652795679.adapt.1900.1.jpg',
    'https://i.pinimg.com/originals/27/05/63/2705636c2cd1cff4646a4c9b9a873a66.jpg',
    'https://i.pinimg.com/736x/1e/36/0c/1e360c324da7891d303389a95efacda1.jpg',
    'https://www.thesprucepets.com/thmb/0mGrChXtmzuoDOYE1Y3CbbntRIA=/1883x1412/smart/filters:no_upscale()/GettyImages-148611850-584f93145f9b58a8cd106c13.jpg'
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

        const allStories = this.state.stories.map((story) => {
            return (
                <Story storyImage={story.storyImage} onClick={this.handleShowLargeImage} />
            )
        });

        const { photoIndex, isOpen } = this.state;

        return (
            <div className="main-stories-container">
                <div className="stories-container">
                    <button className="stories-button" type="button" onClick={() => this.setState({
                        isOpen: true
                    })}>                    
                        <div className="image-frame">
                            { allStories }
                        </div>
                    </button>
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
                </div>
            </div>
        )
    }
}

export default Stories;