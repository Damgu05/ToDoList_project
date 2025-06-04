import React from "react";
import { createRoot } from "react-dom/client";
import AppRoute from "./AppRoute.jsx";
import { AuthProvider } from "./api/AuthContext";

const root = createRoot(document.getElementById("app"));
root.render(
  <AuthProvider>
    <AppRoute />
  </AuthProvider>
);
export default App;
