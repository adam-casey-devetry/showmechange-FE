import React from 'react'

const listOfCapitals = {
    "sacremento": "black",
    "Denver": "organge",
    "Austin": "black",
    "Albany": "black",
    "Columbus": "orange",
    "Lansing": "black",
    "Colorado": "orange",
    "Mandison": "black",
    "Wisconsin": "orange",
    "Salt Lake City": "black"
}

export default function capitalsList() {
    let capArrayItemsOrange = []
    let capArrayItemsBlack = []
    
    for (const property in listOfCapitals) {
        console.log(`${property}: ${listOfCapitals[property]}`);
        
        let myValue = listOfCapitals[property]
        
        if (myValue === 'orange') {
            capArrayItemsOrange.push(property)
        }
        else {
            capArrayItemsBlack.push(property)
        }
    }
    let capArrayItemsOrange2 = []

    for (const property of capArrayItemsOrange) {
        capArrayItemsOrange2.push(<li>{property}</li>)
    }


    let capArrayItemsBlack2 = []

    for (const property of capArrayItemsBlack) {
        capArrayItemsBlack2.push(<li>{property}</li>)
    }

    return (
    <div> 
                <ul>
                  
                    <font color = "orange">
                    {capArrayItemsOrange2}
                    </font>
                    <font color= "black">
                    {capArrayItemsBlack2}
                    </font>
                    
                </ul>
        </div>
    );
}