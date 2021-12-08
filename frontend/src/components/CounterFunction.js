import React, {useState } from "react";


//This is an example for creating a component as a function

function CounterFuncton() {
//give the default value to store
let [number, setNumber] = useState(0)

function increament() {
    setNumber(++number)
}
    return(

        <div>
            <h3>Functional Component</h3>
            <h1>Counter = {number}</h1>

            <button onClick={e => increament()}>INCREAMENT</button>
            
            <button onClick={increament}>INCREAMENT</button>

            <hr></hr>
        </div>
    )

}

export default CounterFuncton;

