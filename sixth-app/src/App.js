import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import Posts from "./Components/Posts"
function App() {
  return (
    <>
    <Container className="container">
    <Posts />
    </Container>
    </>
  );
}

export default App;
