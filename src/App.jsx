import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
