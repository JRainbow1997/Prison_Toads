import React from 'react';

const Story = (props) => {
    return (
        <div>
            <img className="storyImage" src={props.storyImage} alt={props.altImage}/>
        </div>
    )
}

export default Story;