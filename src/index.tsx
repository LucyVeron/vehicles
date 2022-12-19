import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/pages/Product";
import Listing from "./components/pages/Listing";
import Error from "./components/pages/Error";

const container = document.getElementById("root")!;
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Listing />,
    errorElement: <Error />,
  },
  {
    path: "products/:productId",
    element: <Product />,
    errorElement: <Error />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
