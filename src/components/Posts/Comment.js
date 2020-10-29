// import React from 'react';
// import '../Posts/Comment.css'

// class Comment extends React.Component {

//     state = {
//         comments: [],
//         currentComment: "",
//         showingComments: true,
//         uiComments: []
//     }

//     recordCommentHandler = (event) => {
//         console.log(event.target.value)
//         let comment = (event.target.value)
//         this.setState({
//             currentComment: comment
//         })
//         let mappedComments = this.state.comments.map((comment, index) => {            
    
//             return <li key={index}>{comment}</li>
//         })
//         this.setState({uiComments: mappedComments})
//     }

//     showButtonHandler = () => {
//         // let show = this.state.showingComments;
//         // this.setState({ showingComments: !show })
//         let mappedComments = this.state.comments.map((comment, index) => {            
    
//             return <li key={index}>{comment}</li>
//         })
//         if (this.state.showingComments === true) {
//             this.setState({
//                 uiComments: mappedComments
//             })
//         }
//     }

//     addButtonHandler = () => {
//         this.setState({
//             comments: [...this.state.comments, this.state.currentComment],
//             currentComment: "",
//         })
//     }   

//     render() {
        

//         return (
//             <div className="savedComments">
//                 <button className="showMore" onClick={this.showButtonHandler}>View all comments</button>
//                 <p><a  className="usernames" href="google.com"> Miss piggy </a> So cute! </p>
//                 <ul >{this.state.uiComments}</ul>
//                 <p className="timeAgo">19 HOURS AGO</p>
//                 <div className="commentPost">
//                     <input className="comment" placeholder="Add a comment..." type="text" onChange={this.recordCommentHandler} value={this.state.currentComment} />
//                     <button className="postButton" onClick={this.addButtonHandler}> Post </button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Comment;



import React, { Component } from 'react'
import './Comment.css'
export class Comment extends Component {
    state = {
        commentList: [],
        comment: "",
        numberOfComments: 3
    }
    handleInput = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    addComment = (e) => {
        this.setState({
            commentList: [...this.state.commentList, this.state.comment],
            comment: ""
        })
        e.preventDefault(e)
    }
    showMore = () => {
        if (this.state.numberOfComments + 1 <= this.state.commentList.length) {
          this.setState(state => ({ numberOfComments: state.numberOfComments + this.state.commentList.length }));
        } else {
          this.setState({ numberOfComments: this.state.commentList.length })
        }
      }
    render() {
        return (
            <div>
                <ul className="savedComments">
                    <Items className="savedComments" commentList={this.state.commentList} numberOfComments={this.state.numberOfComments}/>
                </ul>
                <button className="showMore" onClick={this.showMore}>show more</button>
                <p className="timeAgo">19 HOURS AGO</p>
                <form className="commentPost" onSubmit={this.addComment}>
                    <input className="comment" placeholder="Add a comment..." type="text" value={this.state.comment} onChange={this.handleInput} />
                    <button className="postButton"type="submit">Post</button> 
                </form>
                
                
            </div>
        )
    }
}
const Items = (props) => {
  if (props.commentList.length === 0) {
    return ""
  }
  return props.commentList
    .slice(0, props.numberOfComments)
.map((commentList, e) => {
return <li value={e} key={commentList.name}>{commentList}</li>}
)}
export default Comment