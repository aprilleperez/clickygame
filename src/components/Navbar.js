import React from "react";
import '../styles/App.css';
////////////////////////////////////////////////////////////


function Navbar() {
    return (
        <div className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand title">Click Game</span>
            <span className="navbar-brand score">Score: 0  |  Top Score: 0</span>
            {/* <span className="nav-item" href="#">Instructions</span>
            <span className="nav-item" href="#">Score: 0  |  Top Score: 0</span> */}
        </div>
    );
}

////////////////////////////////////////////////////////////
export default Navbar;