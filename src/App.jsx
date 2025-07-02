import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";
import Preloader from "./component/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000000); // 2s is enough
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Navbar />
      <main role="main">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
