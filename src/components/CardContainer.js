import React, { Component } from "react";
// import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Card from "./Card";
import "../styles/App.css";
import scouts from "../sailorscouts.json";
////////////////////////////////////////////////////////////

// YES-- set up state
// set up the listeners for click
// YES-- get click to randomize the cards
// get click to update score
// track clicked pic

class CardContainer extends Component {
    // set base state of scouts, scores to 0, and clicked to empty array
    state = {
        scouts,
        score: 0,
        highscore: 0,
        clicked: []
    };

    reset = () => {
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

    // shuffle scouts 
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

    // when button clicked, shuffle the scouts
    buttonClicked = () => {
        this.setState({ scouts: this.shuffleScouts(this.state.scouts) })
    }

    handleClick = data => {
        console.log("clicked")

        if (this.state.clicked.indexOf(data.id) === -1) {
            this.increment();
            this.setState({
                clicked: this.state.clicked.concat(data.id)
            });
        } else {
            this.setState({
                score: 0
            })
        }
    }

    increment = () => {
        console.log("increment");
        // if all have been guessed correctly
        this.setState({
            score: this.state.score + 1
        })
        // if all images have been clicked no more than once player wins
        if (this.state.score === 11) {
            this.reset();
        }
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
                            return (
                                <Card
                                    key={i}
                                    data={scout}
                                    buttonClicked={this.buttonClicked}
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


 // once the user clicks an image div. Check if they have guessed correctly
    // correct guesses won't have their id in the clicked array
    // handleClick = id => {
    //     console.log("clicked")

    //     if (this.state.clicked.indexOf(id) === -1) {
    //         this.increment();
    //         this.setState({ 
    //             clicked: this.state.clicked.concat(id) 
    //         });
    //     } else {
    //         this.defeat();
    //     }
    //       console.log(this.state.clicked);
    //     console.log("handleclick squares");
    // }


    // increment = () => {
    //     console.log("increment");
    //     // if all have been guessed correctly
    //     this.setState({
    //         score: this.state.score + 1
    //     })
    //     // if all images have been clicked no more than once player wins
    //     if (this.state.score === 11) {
    //         this.victory();
    //     }
    //     this.randomize(Data);
    // }