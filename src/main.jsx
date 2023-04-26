import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bulma/css/bulma.min.css";
import AuthProvider from "./context/AuthContext.jsx";
import Root from "./components/Layout/Root.jsx";
import MainContent from "./components/Layout/MainContent.jsx";
import { Login, Register } from "./components/Users/index.js";
import PrivateOutlet from "./components/PrivateOutlet.jsx";
import { List, listLoader, Create } from "./components/Products/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<h1>Error!</h1>}>
        <Route errorElement={<h1>Error!</h1>} />
        <Route index element={<MainContent />} />
        <Route path="/products" element={<PrivateOutlet />}>
          <Route path="" element={<List />} loader={listLoader} />
          <Route path="/products/create" element={<Create />} />
        </Route>
      </Route>
      <Route path="/users">
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
      </Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
