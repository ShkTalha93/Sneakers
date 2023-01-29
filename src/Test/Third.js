import React from 'react';
import {BrowserRouter as Routers,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
// import Header from './Header';
import Header1 from './Header';
// 1. Create a layout with header and footer. 
// Header will have a text logo on the left and on the right will have links to few pages. 
// Links will be Home, About, Profile
// Make Routes for all these pages. Every page will have same header and footer. 
// When any link gets active change its color to red.
// footer will have a text stating I am a developer.
export default function Third() {
  return (
    <>
    
        


        <Routers>
        <Header1 />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Profile' element={<Profile/>}/>
            </Routes>
    
        </Routers>
        
        <footer>
    <p>I am a developer.</p>
    
        </footer>
        </>

    
  )
}
