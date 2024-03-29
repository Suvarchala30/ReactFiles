import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import './App.css';
import Posts from './Components/Posts';
import Navbar from "./Components/Navbar"
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import Post2 from "./Components/Post2"
import Page404 from './Components/Page404';
import Contact from './Components/Contact';
import HOC from './Components/HOC';
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
    <Route path="/" element={<Login />}/>
    <Route path="/aboutus" element={< HOC component={AboutUs} />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/post2/:id" element={<Post2 />} />
    <Route path="/contact" element={<HOC component={Contact} />} />
    <Route path="*" element={<Page404 />} />
    </Routes>
    </Container>
    </R1>
  );
}

export default App;
//npm i react-router-dom
//as is setting nickname if we dont want to use as give BrowserRouter directly