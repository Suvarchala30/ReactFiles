import React from 'react';
import './App.css';
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
//import Products from "./Components/Products"
import Reviews from "./Components/Products2/Products2"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      show:true
    }
  }
  showProducts=()=>{
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <h1 className="heading1">Welcome To The Site</h1>
        <p className="para1">Feel free to explore...</p>
        {/* <Products />
        <br /> */}
        <Button variant="success" className="show-button" onClick={this.showProducts}>
          {this.state.show ? 'Hide' : 'Show'} Products</Button>
        {this.state.show && <Reviews />} 
      </div>
    );
  }
  
}

export default App;
//Conditional rendering : &&