import React from "react"
import { ReactDOM } from "react-dom/client"


const heading = React.createElement(
  "div", 
  {
  id: "parent",
  }, React.createElement("h1",{id:"child"},React.createElement("div",{id:"child1"},[React.createElement("h1",{},"h1"),React.createElement("h2",{},"h2"),React.createElement("h3",{},"h3")])))
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)