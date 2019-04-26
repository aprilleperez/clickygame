import React from "react";
import Card from "./Card";
import "../styles/App.css";
import scouts from "../sailorscouts.json";
////////////////////////////////////////////////////////////


function CardContainer() {
    return (
        <div class="cardContainer">
            {scouts.map((scout, i) => {
                return (
                    <Card
                        key={i}
                        data={scout}
                    />
                )
            })}
        </div>
    );
}

////////////////////////////////////////////////////////////
export default CardContainer;





     {/* <Card />
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
            <Card /> */}