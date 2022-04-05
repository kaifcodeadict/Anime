import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Anime from "./components/Anime/Anime";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" key="home" element={<Home />} />
        <Route path="/anime/:animeId" key="/auth" element={<Anime />} />
        <Route exact path="*" key="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
