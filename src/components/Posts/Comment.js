import React from 'react';
import './Post.css'



class Comment extends React.Component {

    state = {
        comments:[],
        currentComment:"",
        showingComments: true,
        
      }
    
      recordCommentHandler = (event) => {
        console.log(event.target.value)
        let comment = (event.target.value)
        this.setState ( {
          currentComment: comment
        })
      }
            
      showButtonHandler = () => {
        let show = this.state.showingComments;
        this.setState({showingComments: !show})    
        }
    
      addButtonHandler = () => {
        this.setState ({      
          comments: [...this.state.comments, this.state.currentComment],
          currentComment: "",
        })
      }
      
      render() {
        let eachComment = null;
          if(this.state.showingComments === true){
            eachComment = this.state.comments.map((comment, index) => {
              return <li key = {index}>{comment}</li>
          })
        }
            
        return (
            <div className="savedComments">
            <ul >{eachComment}</ul>
            <button onClick = {this.showButtonHandler}>Show more comments</button>
            <input className="comment" placeholder="Add a comment..." type="text" onChange={this.recordCommentHandler} value={this.state.currentComment}/>    
            <button className="postButton" onClick = {this.addButtonHandler}> Post </button>
                
          </div>
        );
      }
    }
  
  export default Comment;
  