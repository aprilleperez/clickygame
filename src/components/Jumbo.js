import React from "react";
import "../styles/App.css";
////////////////////////////////////////////////////////////


function Jumbo() {
    return (
            <div className="jumbotron cstmJumbo">
                <h5>Instructions:</h5> 
                <p>This is a memory game based on 12 picture of the Sailor scouts below.</p>
                <p>Click each picture ONLY ONCE to get a point!</p>
                <p>But be careful, after each click the pictures shuffle their position on the screen, so you'll have to remember which one you already clicked.</p>
                {/* <h1 className="text-center">Score: 0  |  Top Score: 0</h1> */}
            </div>
    );
}

////////////////////////////////////////////////////////////
export default Jumbo;