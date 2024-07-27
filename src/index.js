import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextHook from "./Context/ContextHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextHook>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextHook>
);
