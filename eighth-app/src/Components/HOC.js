import React from "react";

function HOC(props){

    console.log(props)
    return(
        <div style={{border: '1px solid black',margin:'20px'}}>
            <props.component />
            </div>
    )
}
export default HOC