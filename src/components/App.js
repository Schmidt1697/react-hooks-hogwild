import React, { useState } from "react";

import Nav from "./Nav";
import PigDisplay from "./PigDisplay";
import Filter from "./Filter";

import hogs from "../porkers_data";


function App() {
	const[isGreased, setIsGreased] = useState(false);

	   //display pigs greased if checkbox is checked
	   const filteredHogs = hogs.filter(hog => {
		if(isGreased){
			 return hog.greased
		 } else {
			 return true
		 }
	 
		})
	
	return (
		<div className="ui grid container App">
			<Nav />
			<Filter isGreased={isGreased} setIsGreased={setIsGreased} hogs={hogs}/>
			<PigDisplay filteredHogs={filteredHogs}/>
		</div>
	);
}

export default App;
