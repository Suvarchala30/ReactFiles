import React from "react";
import "./App.css";
//import React, {Component} from 'react';
//import Hello from './Components/Hello';
//import HelloClassBased from "./Components/Hello-ClassBased";
//import CounterClass from "./Components/CounterClass"
import CollegeStudents from "./Components/CollegeStudents"

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
  
  render() {
    return (
      <div className="App">
        <CollegeStudents />
       {/*  <CounterClass />
       <HelloClassBased />
         <HelloClassBased greetTo="Africa!" />
        <HelloClassBased greetTo="Canada!" /> */}
      </div>
    );
  }
}

export default App;
