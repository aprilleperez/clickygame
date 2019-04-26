import React from "react";
import Card from "./Card";
import '../styles/App.css';
// import scouts from './sailorscouts.json';
////////////////////////////////////////////////////////////


function CardContainer() {
    return (
        <div class="cardContainer">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {/* {friends.map((friend, i) => {
                return (
                    <FriendCard
                        key={i}
                        data={friend}
                    />
                )
            })} */}
        </div>
    );
}

////////////////////////////////////////////////////////////
export default CardContainer;