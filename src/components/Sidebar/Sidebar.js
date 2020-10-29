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


const Sidebar = () => {
   return (
      <div className="all">
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
               suggestedUserName="toad_on_the_edge"
               commonFollowers="@wild_toad"
               commonFollowersLength="5"
            />
            <SidebarUsers
               profilePicSuggestions={frog3}
               suggestedUserName="Kermy-101"
               commonFollowers="@miss-piggy-gold"
               commonFollowersLength="1"
            />
            <SidebarUsers
               profilePicSuggestions={frog4}
               suggestedUserName="battle-toad-gains"
               commonFollowers="@zitz87, @pimple-z"
               commonFollowersLength="9"
            />
            <SidebarUsers
               profilePicSuggestions={frog5}
               suggestedUserName="Gentlefrog42"
               commonFollowers="@Herm77"
               commonFollowersLength="2"
            />
            <SidebarUsers
               profilePicSuggestions={frog6}
               suggestedUserName="MichiganJ195"
               commonFollowers="@RRunner49"
               commonFollowersLength="8"
            />

            <SidebarFooter />


         </div>
      </div>
   );
}

export default Sidebar;