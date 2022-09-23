import React from "react";

import PigTile from "./PigTile";

function PigDisplay({hogs}){

    const oneHog = hogs.map(hog => {
        
        return (
            
            <PigTile key={hog.name} {...hog} />
        )
    })

    return(
        <div>
            {oneHog}
        </div>
    )
}

export default PigDisplay;