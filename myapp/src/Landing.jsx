import Footer from "./Footer/Footer";
import { Menu } from "./Menu/Menu";
import React from "react";

import Home from "./Home/Home";

function Landing() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}

export default Landing;
