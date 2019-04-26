import React from "react";
////////////////////////////////////////////////////////////


function Card(props) {
    const { id, name, image } = props.data
    return (
        <div id={id}>
            <img id={id} className="card" src={image} alt={name}></img>
        </div>
    );
}

////////////////////////////////////////////////////////////
export default Card;
