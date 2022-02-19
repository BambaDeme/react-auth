import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupModal from "./components/SignupModal";

import Home from "./pages/Home";
function App() {
  return (
    <>
      <SignupModal />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
