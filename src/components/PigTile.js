import React from "react";

function PigTile(hog, isDisplayData, handleTileClick){
    // console.log(hog)
    const hiddenClass= isDisplayData ? "hidden" : ""
    
        
    return (
        <div className="pigTile" onClick={handleTileClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt="pig"/>
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