import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar-wrap">
                        <Link to="/Home" className='logo'><img src={logo} alt="Logo" /></Link>
                        <ul className='navibar'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Menu">Menu</Link></li>
                            <li><Link to="/Catering">Catering</Link></li>
                            <li><Link to="/Gallery">Gallery</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                        <Link to="/Orderonline" className='btnred'>Order Online</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
