import { Routes, Route, Link } from "react-router-dom";
import SignupLogin from "./SignupLogin/SignupLogin";
import Home from "./Home/Home";
import AuthWrapper from "../components/SignupLogin/AuthWrapper";

function App() {
  return (
    <Routes>
        <Route path="/auth" element={
            <AuthWrapper needAuth={false}>
                <SignupLogin />
            </AuthWrapper>
        } />
        <Route path="/" element={
            <AuthWrapper needAuth={true}>
                <Home />
            </AuthWrapper>
        } />
    </Routes>
  );
}

export default App;
