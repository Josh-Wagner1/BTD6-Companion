//import React from 'react';
import './NavbarStyles.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='header'>
            <div className='nav-logo'>
                <img src={logo} alt="Website logo" />
                <a className="no-wrap" href='/'><h1>BTD6 Companion</h1></a>
            </div>

            <ul className='nav-menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/Monkeys'>Monkeys</a></li>
                <li><a href='/Events'>Events</a></li>
                <li><a href='/Legends'>Legends</a></li>
                <li><a href='/Rounds'>Rounds</a></li>
                <li><a href='/Leaderboards'>Leaderboards</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
