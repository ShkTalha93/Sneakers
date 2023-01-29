

import React from 'react'
import {BrowserRouter as Routers,Routes,Route,Link} from 'react-router-dom';

export default function Header1() {
  return (
    <nav className='flex'>
        <div className="logo">
            <p>Task3</p>
            </div> 
<Link to='/' > Home </Link>
<Link to='/About'> About </Link>
<Link to='/Profile'> Profile </Link>  
</nav>
)
}
