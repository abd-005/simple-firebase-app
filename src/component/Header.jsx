import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className='flex padding:5px'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Log in</NavLink>
        </nav>
    );
};

export default Header;