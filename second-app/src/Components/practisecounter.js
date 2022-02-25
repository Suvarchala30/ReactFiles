import React,{ Component } from "react";

class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }
     incrementCounter =() =>{
        this.setState((prevState)=>({
            counter: prevState.counter+1
        }))
    }
    decrementCounter = ()=>{
        this.setState({
            counter: this.state.counter-1
        })
    }
    incrementThree=()=>{
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }
    render(){
        return(
            <div className="CounterClass">
            <h1 style={{ fontSize:'10em' }}>{this.state.counter}</h1>
            <button onClick={this.incrementCounter}>Increment</button>
            <br />
            <br />
            <button onClick={this.decrementCounter}>Decrement</button>
            <br />
            <br />
            <button onClick={this.incrementThree}>Increment-Three</button>
            </div>
        )
    }
}
export default CounterClass