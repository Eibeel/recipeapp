import React from "react";
import { createRoot } from "react-dom/client";
import { RecipeApp } from "./RecipeApp";
import "./style.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecipeApp />
  </React.StrictMode>
);
