import './App.css';
import Hello from './Components/Hello';
import HelloClassBased from './Components/Hello-ClassBased'

function App() {
  return (
    <div className="App">
      <HelloClassBased greetTo="World!"/>
    {/*
      <Hello greetTo="World!" />
       <Hello greetTo="America" />
      <Hello greetTo="Canada" greet="Australia"/> */}
    </div>
  );
}

export default App;
