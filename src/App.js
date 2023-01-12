import "./App.css";
import { useState } from "react";
import Logo from "./Logo/Logo";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  const [pageLoad, setPageLoad] = useState(false);
  setTimeout(() => {
    setPageLoad(true);
  }, 1800);
  return pageLoad ? <Portfolio /> : <Logo />;
}

export default App;
