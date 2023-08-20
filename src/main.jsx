import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./layouts/App";
import router from "./routes/Routs";
import { store } from "./app/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <div>
          <App />
        </div>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
