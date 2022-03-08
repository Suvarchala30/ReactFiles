import React,{useEffect, useState} from "react";
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Forms2=()=>{
    const [slider,setslider]=useState('')
    useEffect(()=>{
        console.log(slider)
    },[slider])
    return(
    <Form  style={{width: '30%', margin: '50px auto'}}>
    
  <Form.Label >Range</Form.Label>
  {/* <Form.Range min="1" max="100" onChange={(e)=>console.log(e.target.value)}/> */}

  <Form.Range min="1" max="100" onChange={(e)=>setslider(e.target.value)}/>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default Forms2