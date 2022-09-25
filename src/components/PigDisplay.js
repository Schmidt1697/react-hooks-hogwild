import PigTile from "./PigTile";
import React from "react";

function PigDisplay({ filteredHogs }){
  
   //map over and display separate pig tiles
    const dipslayPigCard = filteredHogs.map(hog => {
        return (
            <PigTile key={hog.name} hog={hog}/>  
        )
    })

    return(
        <div className="ui three stackable cards">
            {dipslayPigCard}
        </div>
    )
}

export default PigDisplay;