import React from "react";
////////////////////////////////////////////////////////////


const Card = props => {
    const { id, name, image } = props.data
    return (
        <div id={id} >
            {/* sets up id, image link, and name from json file, and sets up listener for onClick event */}
            <img id={id} className="card" src={image} alt={name} onClick={() => props.buttonClicked()}></img>
        </div>
    );
}

////////////////////////////////////////////////////////////
export default Card;
