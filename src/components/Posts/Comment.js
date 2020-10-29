import React from 'react';
import '../Posts/Comment.css'

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
                <button className="showMore" onClick={this.showButtonHandler}>Show more comments</button>
                <p><a  className="username" href="google.com"> Miss piggy </a> So cute! </p>
                <ul >{this.state.uiComments}</ul>
                <div className="commentPost">
                    <input className="comment" placeholder="Add a comment..." type="text" onChange={this.recordCommentHandler} value={this.state.currentComment} />
                    <button className="postButton" onClick={this.addButtonHandler}> Post </button>
                </div>
            </div>
        );
    }
}

export default Comment;
