import React from 'react';
import './Story.css'

const Story = (props) => {
    return (
        <div className="storyimg">
            <img className="storyImage" src={props.storyImage} alt={props.altImage}/>
        </div>
    )
}

export default Story;