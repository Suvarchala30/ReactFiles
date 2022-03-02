import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
//import Products from "./Components/Products"
import Reviews from "./Components/Products2/Products2"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="heading1">Welcome To The Site</h1>
      <p className="para1">Feel free to explore...</p>
      {/* <Products />
      <br /> */}
      <Reviews />
    </div>
  );
}

export default App;
