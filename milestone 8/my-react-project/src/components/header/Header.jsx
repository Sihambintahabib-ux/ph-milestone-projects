import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>i am Header</h1>
            {/* <a href="/home">home</a>
            <a href="/projects">projects</a>
            <a href="/header">header</a>
            <a href="/aboutus">aboutus</a> */}
            <Link to='/'>home</Link>
            <Link to='/projects'>projects</Link>
            {/* <Link to='/header'>header</Link> */}
            <Link to='/aboutus'>aboutus</Link>
            <Link to='/users'>users</Link>
        </div>
    );
};

export default Header;