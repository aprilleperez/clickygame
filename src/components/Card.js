import React from "react";
////////////////////////////////////////////////////////////


function Card(props) {
    const { name, image } = props.data
    return (
        <div id="card">
            <img class="card" src={image} alt={name}></img>
        </div>
    );
}

////////////////////////////////////////////////////////////
export default Card;




{/* <img class="card" src="https://androidapkcloud.com/wp-content/uploads/2017/09/Square-PhotoWithout.png"></img> */}