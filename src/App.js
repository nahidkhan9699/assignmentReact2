import React from "react";
import { Html } from "./components/Html";
import { Javasript } from "./components/Javascript";
import { Reactj } from "./components/React";
import { Css } from "./components/Css";
import "./components/index.css"
function App() {
return(
  <div className="main">
    <Html/>
    <Css/>
    <Javasript/>
    <Reactj/>
  </div>
)
}
export default App;