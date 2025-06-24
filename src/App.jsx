import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
