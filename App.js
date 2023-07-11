/**
 *  React.createElemnet basically creates a object
 * ReactDOM.createRoot only creates the html element
 * we can create teo child in a parent by passing them as an array
 */
import React from "react";
import ReactDOM from "react-dom/client";


const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading"> Hello Akshay saini</h1>
  </div>
);

const title = (
  <h1>
    Hello giri
    <HeadingComponent/>
  </h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);