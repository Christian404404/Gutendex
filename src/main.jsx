import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Category from "./pages/Category";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "category/:topic", element: <Category /> },
      { path: "book/:id", element: <BookDetails /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
