import React from 'react'

const listOfStates = {
    "Missouri": "orange",
    "California": "orange",
    "New York": "black",
    "Illinois": "black",
    "Texas": "orange",
    "Ohio": "black",
    "Colorado": "organge",
    "Wisconsin": "black",
    "Michigan": "black"
}

export default function StatesList() {

    let stateArray = [];
    for (const property in listOfStates) {
        console.log(`${property}: ${listOfStates[property]}`);
    }
    return ( 
        <div> {stateArray}

        </div>

    );
}