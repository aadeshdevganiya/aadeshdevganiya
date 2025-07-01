import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";
import Preloader from "./component/Preloader";

// Optional: for SEO Helmet (React Helmet is good for dynamic title/meta)
// import { Helmet } from "react-helmet";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s is enough
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      {/* Optional Helmet (if installed) */}
      {/* <Helmet>
        <title>Aadesh Devganiya – Web Designer</title>
        <meta name="description" content="Creative frontend developer portfolio using React & Tailwind." />
        <link rel="canonical" href="https://aadeshdevganiya.vercel.app/" />
      </Helmet> */}

      <Navbar />
      <main role="main">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
