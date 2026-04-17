import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Rotunda from "./pages/Rotunda";
import AI from "./pages/AI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rotunda" element={<Rotunda />} />
        <Route path="/ai" element={<AI />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}
export default App;
