import React from 'react';
import './App.css';
import Logo from './images/xena_logo.png';
import Post from './Post';
import Members from './Members'
// import NewPost from './NewPost';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Familytree from './components/Familytree'
import Archive from './components/Archive'
import Timeline from './components/Timeline'
import Calendar from './components/Calendar'

function App() {
  return (
    <div className="App">

      {/* header */}
      <div className = 'app__header'>
        <img
          className = 'app_headerImage' src = {Logo} alt = 'XENA'
        />
      </div>

      {/* body */}
      <div className = 'app__body'>
        
        <BrowserRouter>
          <Navbar />
          <Route path = '/home' component = {Post} />
          <Route path = '/archive' component = {Archive} />
          <Route path = '/familyTree' component = {Familytree} />
          <Route path = '/timeLine' component = {Timeline} />
          <Route path = '/calendar' component = {Calendar} />
        </BrowserRouter>

               

        {/* rightbar */}
        <div className = 'app__rightbar'>
          <div className = 'app__members'>
            <h3>Family members: </h3>
            <Members />
          </div>
          <h3 className = 'app__adds'>Addds Space</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
