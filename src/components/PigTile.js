import React from "react";

function PigTile(hog){
    console.log(hog)
    
    return (
        <div className="pigTile">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt="pig"/>
        </div>


    )

}
 
export default PigTile;