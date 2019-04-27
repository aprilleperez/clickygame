import React, { Component } from "react";
// import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Card from "./Card";
import "../styles/App.css";
import scouts from "../sailorscouts.json";
////////////////////////////////////////////////////////////


class CardContainer extends Component {
    // set base state of scouts, scores to 0, and clicked to empty array
    state = {
        scouts,
        score: 0,
        highscore: 0,
        clicked: []
    };

    // to reset score and shuffle at end of round
    reset = () => {
        console.log("reset")
        this.setState({
            score: 0,
            clicked: []
        });
        this.shuffleScouts(scouts);
    }

    // randomize scouts on pg load
    componentDidMount() {
        this.shuffleScouts(scouts);
    }

    // shuffle scouts position
    shuffleScouts = arr => {
        var j, temp, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    // when scout is clicked, will track the id in the array and determine if score will be added
    handleClick = id => {
        console.log("clicked" + " " + id)
        if (this.state.clicked.indexOf(id) === -1) {
            this.addScore();
            this.setState({
                clicked: this.state.clicked.concat(id)
            });
        } else {
            this.setState({
                score: 0
            })
        }
        this.shuffleScouts(this.state.scouts)
    }

    addScore = () => {
        console.log("addScore");
        // if all have been guessed correctly
        this.setState({
            score: this.state.score + 1,
            highscore: this.state.highscore + 1
        })

        // if (this.state.score === 11) {
        //     this.setState({
        //         highscore: this.state.highscore + 1
        //     })
        //     this.reset();
        // }
        this.shuffleScouts(scouts);
    }


    render() {
        return (
            <div className="wrapper">
                <Navbar score={this.state.score} highscore={this.state.highscore} />
                <Jumbo />
                <div className="cardContainer">
                    {/* iterates over each scout in sailorscouts.js file to generate card. Card will be given data from json file and set up the onClick listener */}
                    {
                        scouts.map((scout, i) => {
                            // console.log(scout)
                            return (
                                <Card
                                    key={i}
                                    data={scout}
                                    handleClick={this.handleClick}
                                />
                            )
                        })
                    }
                </div>
            </div>


        );
    }
}


////////////////////////////////////////////////////////////
export default CardContainer;


 // when button clicked, shuffle the scouts
    // buttonClicked = () => {
    //     this.setState({ scouts: this.shuffleScouts(this.state.scouts) })
    // }

     // id={scout.id}
                                    // src={scout.src}
                                    // alt={scout.alt}
                                    // buttonClicked={this.buttonClicked}