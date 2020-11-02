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