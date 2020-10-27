import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <h1>Toadstagram</h1>
                <li><Link to = "/"> Home </Link></li>
                <li><Link to = "about"> About </Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;