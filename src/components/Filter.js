

const Filter = ({ hogs, isGreased, setIsGreased }) => {
   
   function checkForGreased(){
    setIsGreased(isGreased => !isGreased)
   }

    return (
        <div className="filterWrapper">
            <label>
                <input type="checkbox" onChange={checkForGreased}/>
                <span>Check for Greased Pigs</span>
            </label>
         </div>
    )
}

export default Filter;