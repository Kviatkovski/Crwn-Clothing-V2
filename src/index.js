import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Navigation from "./routes/navigation/navigation.component";
import reportWebVitals from "./reportWebVitals";

import { UserProvider } from "./contexts/user.context";

import Authentication from "./routes/authentication/authentication.component";
import "./index.scss";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "auth",
        element: <Authentication />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
