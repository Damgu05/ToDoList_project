import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import { useAuth } from "./api/AuthContext";

const AppRoute = () => {
  const { token } = useAuth();

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {token && <SidebarLayout />}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            {!token && <Route path="/*" element={<Welcome />} />}
            {token && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/TaskManager" element={<TaskManager />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoute;
