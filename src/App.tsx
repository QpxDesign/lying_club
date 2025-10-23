import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Rotunda from "./pages/Rotunda";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rotunda" element={<Rotunda />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}
export default App;
