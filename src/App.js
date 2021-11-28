import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Containers/Home/Home";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/QuickStay-Website");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/QuickStay-Website" element={<Home />} />
        <Route path="/QuickStay-Website/about" element={<Home />} />
        <Route path="/QuickStay-Website/blog" element={<Home />} />
        <Route path="/QuickStay-Website/contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
