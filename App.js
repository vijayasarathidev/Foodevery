/**
 *  React.createElemnet basically creates a object
 * ReactDOM.createRoot only creates the html element
 * we can create teo child in a parent by passing them as an array
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("h1", {}, "Hello child 1"),React.createElement("h2", {}, "Hello child 2"),React.createElement("h3", {}, "Hello child 3")]
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);
  