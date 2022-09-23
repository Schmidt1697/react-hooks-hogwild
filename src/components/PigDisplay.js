import PigTile from "./PigTile";
import React, {useState} from "react";

function PigDisplay({hogs}){
    const [isDisplayData,setIsDisplayData]=useState(false)
    const handleTileClick=(e)=>{
    //     setIsDisplayData (isDisplayData => !isDisplayData)
    console.log("this was clicked")
    } 
    


    const oneHog = hogs.map(hog => {
        
        return (
            
            <PigTile key={hog.name} {...hog}isDisplayData={isDisplayData} handleTileClick={handleTileClick} className="ui eight wide column" />
            
        )
    })

    return(
        <div className= "ui grid container">
            {oneHog}
        </div>
    )
}

export default PigDisplay;