import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import AppLayout from "./AppLayout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<AppLayout />} />
));

const App = () => <RouterProvider router={router} />;

export default App;
