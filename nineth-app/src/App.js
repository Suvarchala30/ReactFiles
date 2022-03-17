import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import './App.css';
import Posts from './Components/Posts';
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import AboutUs from './Components/About';
import Page404 from './Components/Page404';
import Contact from './Components/Contact';
import Post2 from "./Components/Post2"
import HOC from './Components/HOC';
import Count from './Components/Count'
import { Provider } from 'react-redux'
import store from './redux/store';
import {
  BrowserRouter as R1,
  Routes,
  Route,
  Link
} from "react-router-dom"
function App() {
  return (
    <Provider store={store}>
    <R1>
      <Navbar />
<Container>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/aboutus" element={< HOC component={AboutUs} />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/post2/:id" element={<Post2 />} />
    <Route path="/count" element={<Count />} />
    <Route path="/contact" element={<HOC component={Contact} />} />
    <Route path="*" element={<Page404 />} />
    </Routes>
    </Container>
    </R1>
    </Provider>
  );
}

export default App;
//npm i react-router-dom
//as is setting nickname if we dont want to use as give BrowserRouter directly