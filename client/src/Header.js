import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <ul className="header-left">
                <li className="logo"><a href="/">Book Library</a></li>
            </ul>

            <ul className="header-right">
                <li><a href="/">Create</a></li>
                <li><a href="/">View</a></li>
            </ul>
        </div>
    );
}

export default Header;