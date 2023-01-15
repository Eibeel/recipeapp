import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RecipeApp } from "./RecipeApp";
import { store } from "./store/store";
import "./style.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RecipeApp />
    </Provider>
  </React.StrictMode>
);
