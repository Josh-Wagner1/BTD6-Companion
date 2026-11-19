import React from 'react';
import { Link } from 'react-router';
import './NavbarStyles.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="header">
            <div className='nav-logo'>
                <img src={logo} alt="Website logo" />
                <a className="no-wrap" href='/'><h1>BTD6 Companion</h1></a>
            </div>

            <ul className='nav-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Monkeys">Monkeys</Link></li>
                <li><Link to="/Events">Events</Link></li>
                <li><Link to="/Legends">Legends</Link></li>
                <li><Link to="/Rounds">Rounds</Link></li>
                <li><Link to="/Leaderboards">Leaderboards</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
