import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Products from "./Components/Products"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="heading1">Welcome To The Site</h1>
      <p className="para1">Feel free to explore...</p>
      <Products />
    </div>
  );
}

export default App;
