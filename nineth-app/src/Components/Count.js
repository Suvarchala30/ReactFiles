import React,{useState} from "react"
import {Button} from "react-bootstrap"
import { incrementCounter,decrementCounter } from "../redux/actions"
import { connect } from "react-redux"
const Count=(props)=>{
    //const [countInput,setcountInput]=useState(0)
    return(
        <div style={{textAlign:'center'}}>
            <h2 className="count-display">Count</h2>
            <h1 style={{fontSize: '150px'}}>{props.count}</h1>
            {/* <input type="number" className="count-input" value={countInput} onChange={(e)=>setcountInput(Number(e.target.value))}/> <br /> <br /> */}


            {/* <Button className="btn-dark count-button" onClick={()=> props.incrementCounter(countInput)}>Increment</Button>
<br /><br />
<Button className="btn-dark count-button" onClick={()=> props.decrementCounter(countInput)}>Decrement</Button> */}

{/* 
//Not recommeneded method */}
{/* <Button className="btn-dark count-button" onClick={()=> props.incrementCounter(1)}>Increment</Button>
<br /><br />
<Button className="btn-dark count-button" onClick={()=> props.decrementCounter(1)}>Decrement</Button>


<br /> <br />
<Button className="btn-dark count-button" onClick={()=> props.incrementCounter(3)}>Increment 3</Button>
<br /><br />
<Button className="btn-dark count-button" onClick={()=> props.decrementCounter(3)}>Decrement 3</Button> */}




<Button className="btn-dark count-button" onClick={()=> props.incrementCounter()}>Increment</Button>
<br /><br />
<Button className="btn-dark count-button" onClick={()=> props.decrementCounter()}>Decrement</Button>


<br /> <br />
<Button className="btn-dark count-button" onClick={()=> props.incrementCounter(3)}>Increment 3</Button>
<br /><br />
<Button className="btn-dark count-button" onClick={()=> props.decrementCounter(3)}>Decrement 3</Button>



{/* 
<Button className="btn-dark count-button" onClick={props.incrementCounter}>Increment</Button>
<br /><br />
<Button className="btn-dark count-button" onClick={props.decrementCounter}>Decrement</Button> */}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        //count:state.count
        count:state.count.count
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        incrementCounter:(countInput)=>dispatch(incrementCounter(countInput)),
        decrementCounter:(countInput)=>dispatch(decrementCounter(countInput))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Count)