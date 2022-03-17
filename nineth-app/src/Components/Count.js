import React from "react"
import {Button} from "react-bootstrap"
import { incrementCounter } from "../redux/actions"
import { connect } from "react-redux"
import { propTypes } from "react-bootstrap/esm/Image"
const Count=(props)=>{
    return(
        <div style={{textAlign:'center'}}>
            <h2 className="count-display">Count</h2>
            <h1 style={{fontSize: '150px'}}>{props.count}</h1>
            
<Button className="btn-dark count-button" onClick={props.incrementCounter}>Increment</Button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        count:state.count
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        incrementCounter:()=>dispatch(incrementCounter())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count)