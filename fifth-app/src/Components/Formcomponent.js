import React,{useEffect, useState} from "react";
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Formcomponent(){
    const [logindetails,setlogindetails]=useState({
        email:'',
        password:'',
        isChecked:false,
    })
    useEffect(()=>{
        console.log(logindetails)

    },[logindetails])

    const handlesubmit=()=>{
        alert(JSON.stringify(logindetails))
    }
    return(
        <Form style={{width: '30%', margin: '50px auto'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder= "Enter email" onChange={(e) => setlogindetails({...logindetails, email:e.target.value})
    } /> 
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => setlogindetails({...logindetails, password:e.target.value})
    }/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree with the terms and conditions" checked={logindetails.isChecked} onChange={(e)=>setlogindetails({...logindetails,isChecked:e.target.checked})} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handlesubmit}>
    Submit
  </Button>
</Form>
    )
}
export default Formcomponent