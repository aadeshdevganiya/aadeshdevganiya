import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";
import Preloader from "./component/Preloader";
import Resume from "./component/Resume";
import ProjectPage from "./component/ProjectPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Navbar />
      <main role="main" className="fade-in">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projectpage" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
