import './MainContextApp.css';

import React, { useState, useEffect } from 'react'
import Profile from './Profile'
import Footer from './Footer'


function MainContextApp() {

  const hasWindow = typeof window !== 'undefined';
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  useEffect(() => {

    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line
  }, [hasWindow]);

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth -450 : null;
    const height = hasWindow ? window.innerHeight - 250 : null;
    return {
      width,
      height,
    };
  }

  //console.log(window.innerHeight);
  //console.log(window.innerWidth);

  return (

      <div className="mainContent" style={windowDimensions}>
        <label className="panelHead">Main Context App Component</label>
        <Profile>
        </Profile>
        <Footer></Footer>
      </div>
   
  )
}

export default MainContextApp
