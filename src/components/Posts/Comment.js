import React from 'react';
import './Comment.css'

class Comment extends React.Component {

    state = {
        comments: [],
        currentComment: "",
        showingComments: true,
        uiComments: []
    }

    recordCommentHandler = (event) => {
        console.log(event.target.value)
        let comment = (event.target.value)
        this.setState({
            currentComment: comment
        })
        let mappedComments = this.state.comments.map((comment, index) => {            
    
            return <li key={index}>{comment}</li>
        })
        this.setState({uiComments: mappedComments})
    }

    showButtonHandler = () => {
        // let show = this.state.showingComments;
        // this.setState({ showingComments: !show })
        let mappedComments = this.state.comments.map((comment, index) => {            
    
            return <li key={index}>{comment}</li>
        })
        if (this.state.showingComments === true) {
            this.setState({
                uiComments: mappedComments
            })
        }
    }

    addButtonHandler = () => {
        this.setState({
            comments: [...this.state.comments, this.state.currentComment],
            currentComment: "",
        })
    }   

    render() {
        

        return (
            <div className="savedComments">
                <ul >{this.state.uiComments}</ul>
                <button onClick={this.showButtonHandler}>Show more comments</button>
                <div className="commentPost">
                    <input className="comment" placeholder="Add a comment..." type="text" onChange={this.recordCommentHandler} value={this.state.currentComment} />
                    <button className="postButton" onClick={this.addButtonHandler}> Post </button>
                </div>
            </div>
        );
    }
}

export default Comment;
