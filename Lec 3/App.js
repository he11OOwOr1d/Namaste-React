import React from "react";  
import ReactDOM  from "react-dom/client";

const Title = () => (
  <h1>Namaste React using JSX</h1>
)

const HeadingComponent = () => (
  <div>
      <Title/>
      <h1>Namaste React using Functional Comp</h1>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)