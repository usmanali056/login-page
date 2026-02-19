import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";


function App() {
  return (
    <Router>


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
