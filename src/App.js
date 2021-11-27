import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
