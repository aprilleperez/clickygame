import React from "react";
////////////////////////////////////////////////////////////

const styles = {
    // card: {
    //   background: "#e8eaf6"
    // },
    // heading: {
    //   background: "#9a74db",
    //   minHeight: 50,
    //   lineHeight: 3.5,
    //   fontSize: "1.2rem",
    //   color: "white",
    //   padding: "0 20px"
    // }
};

function Jumbo() {
    return (
        <div class="container">
            <div className="jumbotron">
                <h1>Hello, world!</h1>
                <p>I'm a jumbotron!</p>
                <p>
                    <button className="btn btn-primary btn-lg">Learn more</button>
                </p>
            </div>

        </div>
    );
}

////////////////////////////////////////////////////////////
export default Jumbo;