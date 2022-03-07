import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"
const ButtonsCom = ({counter,setCounter})=>{
    return(
        <div>
        <Button variant="dark" onClick={()=>setCounter(counter+1)}>
            Increment Buttton
        </Button>
        </div>
    )
}
export default ButtonsCom