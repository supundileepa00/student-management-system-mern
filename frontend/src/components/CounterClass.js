import React, { Component } from "react";

//This is an example for making a component
//create component using class based approach

class CounterClass extends React.Component{
    constructor(){
        super();

        //bind the function
        this.increament = this.increament.bind(this)

        //this is a JS object
        this.state = {
            number: 0
        }
    }

    //need to bind the function with the class
    increament() {
        this.setState({
            number: this.state.number + 1
        })  
    }

    render(){
        return(
            <div>
                <hr></hr>
                <h3>Class Based Component</h3>
                <h1>Counter = {this.state.number}</h1>

                <button onClick={this.increament}>Increment</button>

                <hr></hr>
            </div>
        )
    }

}


export default CounterClass;