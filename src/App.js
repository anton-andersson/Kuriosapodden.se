import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Episodes from "./Episodes";
import FooterComp from "./FooterComp";
import EpisodeDetails from "./EpisodeDetails";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/episodes" element={<Episodes />}></Route>
            <Route
              exact
              path={"/episodes/:id"}
              element={<EpisodeDetails />}
            ></Route>
          </Routes>
        </div>
        <div className="footer">
          <FooterComp />
        </div>
      </div>
    </Router>
  );
}

export default App;
