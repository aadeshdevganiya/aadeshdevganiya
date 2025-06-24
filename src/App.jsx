import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomeBanner from "./component/HomeBanner";
import About from "./component/About";
import Skills from "./component/Skills";
import Journey from "./component/Journey";
import Ranking from "./component/Ranking";
import SocialMedia from "./component/SocialMedia";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home route (e.g. homepage with banner) */}
        <Route path="/" element={<HomeBanner />} />
        {/* About route with nested tabs */}
        <Route path="/about" element={<About />}>
          <Route path="technicalskill" element={<Skills />} />
          <Route path="educationjourney" element={<Journey />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="socialmedia" element={<SocialMedia />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
