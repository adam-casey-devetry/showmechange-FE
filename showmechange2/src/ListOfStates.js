import React from 'react'

const listOfStates = {
    "Missouri": "orange",
    "California": "orange",
    "New York": "black",
    "Illinois": "black",
    "Texas": "orange",
    "Ohio": "black",
    "Colorado": "orange",
    "Wisconsin": "black",
    "Michigan": "black"
}

export default function StatesList() {

    let stateArrayItemsOrange = []
    let StateArrayItemsBlack = []

    for (const property in listOfStates) {
        console.log(`${property}: ${listOfStates[property]}`);
        //stateArrayItemsOrange.push(<li>{property}</li>)
        //StateArrayItemsBlack.push(<li>{property}</li>)
        let myValue = listOfStates[property]
        if (myValue === 'orange') {
            stateArrayItemsOrange.push(<li>{property}</li>)
        }
        else {
            StateArrayItemsBlack.push(<li>{property}</li>)
        }
    }
    return ( 
        <body bgcolor = "white">
        <div> 
                <ul>
                  
                    <font color = "orange">
                    {stateArrayItemsOrange}
                    </font>
                    <font color= "black">
                    {StateArrayItemsBlack}
                    </font>
                    
                </ul>
        </div>
        </body>
    );
}