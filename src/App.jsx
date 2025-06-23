import { useState } from "react";
import Navbar from "./component/Navbar";
import HomeBanner from "./component/HomeBanner";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomeBanner />
    </>
  );
}

export default App;
