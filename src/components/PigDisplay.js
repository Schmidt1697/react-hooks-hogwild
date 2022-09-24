import PigTile from "./PigTile";
import React, { useState } from "react";

function PigDisplay({hogs}){
   const[selectedCategory, setSelectedCategory] = useState(true);
   const[isSortWeight, setIsSortWeight] = useState(false)
   
   function handleCategoryChange(e){
    setSelectedCategory(e.target.value)
   }

   //filter pigs based on greased vs ungreased
   const filteredHogs = hogs.filter(hog => {
   if(selectedCategory === "Greased"){
        return hog.greased
    } else if (selectedCategory === 'Ungreased'){
        return !hog.greased
    } else {
        return true
    }

   })

   //sort by weight
   function handleSortWeight(){
    setIsSortWeight(isSortWeight => !isSortWeight)
    const sortedWeights = hogs.sort((a, b) => b.weight - a.weight);
    return sortedWeights;
}



  
   //map over and display separate pig tiles
    const onePigCard = filteredHogs.map(hog => {
        return (
            <PigTile key={hog.name} hog={hog} className="ui eight wide column"/>  
        )
    })

    return(
        <div className="ui grid container">
         <div className="filterwrapper">
                    <select name="filter" onChange={handleCategoryChange}>
                    <option value="All">Filter Greased Pigs</option>
                    <option value="Greased">Greased</option>
                    <option value="Ungreased">Ungreased</option>
                    
                </select>
            </div>
         <button onClick={handleSortWeight}>Sort by Weight</button>
         {/* <button onClick={sortName}>Sort by Name</button> */}
            {onePigCard}
        </div>
    )
}

export default PigDisplay;