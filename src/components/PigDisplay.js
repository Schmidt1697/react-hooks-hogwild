import PigTile from "./PigTile";
import React from "react";

function PigDisplay({hogs}){
    
   

    const onePigCard = hogs.map(hog => {
        return (
            <PigTile key={hog.name} hog={hog}  />
            
        )
    })

    return(
        <div className="ui grid container">
            {onePigCard}
        </div>
    )
}

export default PigDisplay;