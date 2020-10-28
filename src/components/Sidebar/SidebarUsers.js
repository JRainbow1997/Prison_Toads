import React from 'react';
import './SidebarUsers.css';

const SidebarFooter = (props) => {
    
   return(
       <div className = "suggestedUsers">   
         <img src={props.profilePicSuggestions} alt="" id="suggestedProfilePic"  />
         <span className="suggestedUsersText">
          <a href="">username</a>
          <p>Followed by {props.commonFollowers} + {props.commonFollowersLength} more</p></span>
          <button href="" id="followButton">Follow</button>
         
       </div>
   )

}

export default SidebarFooter