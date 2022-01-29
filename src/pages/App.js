import { Routes, Route, Link } from "react-router-dom";
import SignupLogin from "./SignupLogin/SignupLogin";
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<SignupLogin />} />
            <Route path="about" element={<SignupLogin />} />
        </Routes>
    </div>
  );
}

export default App;
