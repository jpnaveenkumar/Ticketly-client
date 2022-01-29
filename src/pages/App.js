import { Routes, Route, Link } from "react-router-dom";
import SignupLogin from "./SignupLogin/SignupLogin";

function App() {
  return (
    <Routes>
        <Route path="/" element={<SignupLogin />} />
        <Route path="about" element={<SignupLogin />} />
    </Routes>
  );
}

export default App;
