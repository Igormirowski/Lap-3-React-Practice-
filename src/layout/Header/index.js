import React from 'react';
import { NavLink } from "react-router-dom";
import { BackButton } from '../../components';

import './style.css'

const Header = () => {
    const activeClass = ({ isActive }) => isActive ? 'current' : undefined 
    return (
    <nav>
        <ul>
           
            {/* <li><NavLink  to='/'>News</NavLink></li>
            <li><NavLink  to='/about'>About</NavLink></li>
            <li><NavLink  to='home'>Home</NavLink></li> */}
            <li><NavLink className={ activeClass} to='/'>Home</NavLink></li>
            <li><NavLink className={ activeClass} to='/about'>About</NavLink></li>

            {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li> */}
            
            {/* <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li> */}
            

            <BackButton />
        </ul>
        
    </nav>
    )
    
}

export default Header;
