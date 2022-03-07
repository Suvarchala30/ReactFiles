import React,{ useState, useEffect } from 'react';
import './App.css';
import TableComponent from "./Components/TableComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button, ProgressBar} from "react-bootstrap"
import IncrementButton from "./Components/Buttons"


function App() {
  const [show,setShow] = useState(true)
  const [counter,setCounter] = useState(0)

  //Replicating componentDidMount using useEffect hook
  useEffect(()=>{
    console.log('Component Mounted')
  },[])

  //Replicating componentDidUpdate using useEffect hook
  useEffect(()=>{
    console.log('Counter/show state updated')
  },[counter,show])


  return (
    <Container className="App">
     {show &&  <TableComponent />}
    <Button variant="dark" onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
    <ProgressBar now={counter} />
    <IncrementButton counter={counter} setCounter={setCounter} />
    </Container>
  );
}

export default App;
