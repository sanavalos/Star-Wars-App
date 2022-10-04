import Home from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Residents from "./components/Residents";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/planet/:name" element={<Residents />} />
        <Route exact path="/resident/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
