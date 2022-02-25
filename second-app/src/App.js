import React from "react";
import "./App.css";
//import React, {Component} from 'react';
//import Hello from './Components/Hello';
import HelloClassBased from "./Components/Hello-ClassBased";

// function App() {
//   return (
//     <div className="App">
//       <HelloClassBased greetTo="World!"/>
//       <HelloClassBased greetTo="Africa!"/>
//       <HelloClassBased greetTo="Canada!"/>
//     {/*
//       <Hello greetTo="World!" />
//        <Hello greetTo="America" />
//       <Hello greetTo="Canada" greet="Australia"/> */}
//     </div>
//   );
// }

//class App extends Component{
class App extends React.Component {
  constructor(props){
    super(props)
    //console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <HelloClassBased />
        {/* <HelloClassBased greetTo="Africa!" />
        <HelloClassBased greetTo="Canada!" /> */}
      </div>
    );
  }
}

export default App;
