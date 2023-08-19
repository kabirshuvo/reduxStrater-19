import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./layouts/App";
import router from "./routes/Routs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <div>
        <App />
      </div>
    </RouterProvider>
  </React.StrictMode>
);
