import React, { Component } from 'react';
import './App.css';

import Stories from './components/Stories/Stories';
import Sidebar from './components/Sidebar/Sidebar';
import Wartbutton from './components/Posts/Wartbutton';


// import Comment from './components/Posts/Comment'
// import Post from './components/Posts/Post';


class App extends Component {


  render() {
    return (
      <div>
        <nav className="Nav">
          <div className="Nav-menus">
            <div className="Nav-brand">
              <a className="Nav-brand-logo" href="/">
                Instagram
                     </a>
            </div>
          </div>
        </nav>
        <Stories />

        <Sidebar />

        <Wartbutton />


      </div>

    );
  }
}

export default App;

// import Post from './components/Posts/Post';
// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return <div className="App">

//             <section className="App-main">
//               <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
//               <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

//               {/* more posts */}
//             </section>
//           </div>;
//   }
// }
// export default App;