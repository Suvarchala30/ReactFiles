import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import './App.css';
import Posts from "./Components/Posts"
import Navbar from "./Components/Navbar"
import LandingPage from './Components/LandingPage';
import {
  BrowserRouter as R1,
  Routes,
  Route,
  Link
} from "react-router-dom"
function App() {
  return (
    <R1>
      <Navbar />
<Container>
  {/* <Link to="/">Home</Link>{' '}
  <Link to='/posts'>Posts</Link> */}
    <Routes>
    <Route path="/" element={<LandingPage />}/>
    <Route path="/posts" element={<Posts />} />
    </Routes>
    </Container>
    </R1>
  );
}

export default App;
//npm i react-router-dom
//as is setting nickname if we dont want to use as give BrowserRouter directly