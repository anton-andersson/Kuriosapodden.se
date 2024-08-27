import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Episodes from './Episodes';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/episodes" element={<Episodes/>}></Route>
          </Routes>
        </div>

      </div>

    </Router>
  );
}

export default App;
