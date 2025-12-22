import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TabsImplementation from "./Components/Tabs/Tabs-Implementation";
import TabsReusable from "./Components/Tabs/TabsReusable/Tabs";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/tabs" element={<TabsImplementation />}></Route>
      <Route
        index={true}
        path="/tabs-reusable"
        element={<TabsReusable />}
      ></Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
