import React from 'react';
import './SidebarUsers.css';

const SidebarUsers = (props) => {

   const follow = (event) => {
      // event.target.innerHTML = "Following"
      
      
      if (event.target.innerHTML==="Follow") {
         event.target.innerHTML = "Following"
      } else if (event.target.innerHTML==="Following"){
         event.target.innerHTML = "Follow"
      }
   }
    
   return(
       <div className = "suggestedUsers">   
         <img src={props.profilePicSuggestions} alt="" id="suggestedProfilePic"  />
         <span className="suggestedUsersText">
          <a href="">{props.suggestedUserName}</a>
          <p>Followed by {props.commonFollowers} + {props.commonFollowersLength} more</p></span>
          <button href="" id="followButton" onClick={follow}>Follow</button>
         </div>
       
   )

}

export default SidebarUsers