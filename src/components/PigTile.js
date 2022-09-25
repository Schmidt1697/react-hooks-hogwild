import React, { useState } from "react";

function PigTile({hog}){
    // console.log(hog)
    const [isDisplayData, setIsDisplayData]= useState(false);
    function handleTileClick() {
        setIsDisplayData((isDisplayData) => !isDisplayData);
        console.log("this was clicked")
    } 
    
    const hiddenClass= isDisplayData ? "" : "hidden";

    return (
        <div className="ui card eight wide column pigTile" onClick={handleTileClick} >
            <h3>{hog.name}</h3>
            <img src={hog.image} alt="pig" className="miniPigTile"/>
            <ul className={hiddenClass}>
                <li>
                    Specialty: {hog.specialty}
                </li>
                <li>
                    Weight: {hog.weight}
                </li>
                <li>
                    {hog.greased ? "Greased" : "Not Greased"} 
                </li>
                <li>
                    Highest Medal Achieved: {hog["highest medal achieved"]}
                </li>
            </ul>
        </div>


    )

}
 
export default PigTile;

