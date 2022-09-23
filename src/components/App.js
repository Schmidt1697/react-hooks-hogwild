import React from "react";
import Nav from "./Nav";
import PigDisplay from "./PigDisplay";

import hogs from "../porkers_data";


function App() {
	
	return (
		<div className="App">
			<Nav />
			<PigDisplay hogs={hogs}/>
		</div>
	);
}

export default App;
