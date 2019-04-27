import React from "react";
import '../styles/App.css';
////////////////////////////////////////////////////////////


const Navbar = props => (
    <div className="navbar sticky-top navbar-expand-lg cstmNav">
        <span className="navbar-brand title">Sailor Scouts Click Game</span>
        <span className="navbar-brand score">Score: {props.score}  |  High Score: {props.highscore}</span>
    </div>
);


////////////////////////////////////////////////////////////
export default Navbar;


// function Navbar() {
//     return (
//         <div className="navbar sticky-top navbar-expand-lg">
//             <span className="navbar-brand title">Click Game</span>
//             <span className="navbar-brand score">Score: 0  |  Top Score: 0</span>
//             {/* <span className="nav-item" href="#">Instructions</span>
//             <span className="nav-item" href="#">Score: 0  |  Top Score: 0</span> */}
//         </div>
//     );
// }