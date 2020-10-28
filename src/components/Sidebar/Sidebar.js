import React from 'react';
import './Sidebar.css';
import SidebarFooter from './SidebarFooter';
import SidebarUsers from './SidebarUsers';
import frog1 from './img/profile-pic-1.png';
import frog2 from './img/profile-pic-2.png';
import frog3 from './img/profile-pic-3.png';
import frog4 from './img/profile-pic-4.png';
import frog5 from './img/profile-pic-5.png';
import frog6 from './img/profile-pic-6.png';


class Sidebar extends React.Component {
   state = {}
   render() { 
      return (
         <div className="sidebarWrap">

            <div className="userInfo">
               <img id="userProfilePic" src={frog1} alt="" />
               <span className="userInfoText">
                  <a href="" id="username">MrToad55rbit</a>
                  <p id="nametag">Millionaire toad | USA</p>
               </span>
            </div>

            <span className="suggestionBanner">
               <p>Suggestions for You</p>
               <a href="">See All</a>
            </span>

            <SidebarUsers 
               profilePicSuggestions={frog2}
               commonFollowers="@userfrog1"
               commonFollowersLength="9"
            />
            <SidebarUsers 
               profilePicSuggestions={frog3}
               commonFollowers="@userfrog2"
               commonFollowersLength="9"
            />
            <SidebarUsers 
               profilePicSuggestions={frog4}
               commonFollowers="@userfrog3"
               commonFollowersLength="9"
            />
            <SidebarUsers 
               profilePicSuggestions={frog5}
               commonFollowers="@userfrog4"
               commonFollowersLength="9"
            />
            <SidebarUsers 
               profilePicSuggestions={frog6}
               commonFollowers="@userfrog5"
               commonFollowersLength="9"
            />

            <SidebarFooter />
            

         </div>
      );
   }
}
 
export default Sidebar;