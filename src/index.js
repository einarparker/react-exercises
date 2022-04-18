import React from "react";
import ReactDOM from "react-dom/client";

const name = "Einar Parker";
const date = new Date();
let year = date.getFullYear();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <h1>Created by {name}</h1>
      <p> @Copyright {year}</p>
    </>
  </React.StrictMode>,
);
