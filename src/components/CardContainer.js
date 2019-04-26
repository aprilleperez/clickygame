import React from "react";
import Card from "./Card";
import "../styles/App.css";
import scouts from "../sailorscouts.json";
////////////////////////////////////////////////////////////


function CardContainer() {
    return (
        <div className="cardContainer">
        {/* iterates over each scout in sailorscouts.js file to generate card */}
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
