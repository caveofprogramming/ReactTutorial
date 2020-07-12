import React from 'react';
import './Header'

function Header() {
    return (
        <div className="header">
            <ul>
                <li className="logo"><a href="/">Book Library</a></li>
            </ul>

            <ul>
                <li><a href="/">Create</a></li>
                <li><a href="/">View</a></li>
            </ul>
        </div>
    );
}

export default Header;