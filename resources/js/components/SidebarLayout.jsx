import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../api/AuthContext"; // adapte ce chemin si besoin

// Composants simulés (pro-sidebar-like)
const Sidebar = ({ children, backgroundColor, style }) => (
  <div style={{ width: "250px", backgroundColor, ...style, position: "relative" }}>
    {children}
  </div>
);

const Menu = ({ children, style, menuItemStyles }) => (
  <div style={style}>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { key: index, menuItemStyles })
    )}
  </div>
);

const MenuItem = ({ children, onClick, style, menuItemStyles, component }) => (
  <div
    onClick={onClick}
    style={{
      cursor: "pointer",
      ...menuItemStyles?.button?.(),
      ...style,
    }}
    onMouseEnter={(e) => {
      if (menuItemStyles?.button?.()?.["&:hover"]) {
        Object.assign(e.target.style, menuItemStyles.button()["&:hover"]);
      }
    }}
    onMouseLeave={(e) => {
      if (menuItemStyles?.button) {
        Object.assign(e.target.style, menuItemStyles.button());
      }
    }}
  >
    {component || children}
  </div>
);

const SidebarLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth(); // 🔥 on récupère le logout depuis le contexte

  const handleLogout = () => {
    logout(); // ⬅️ cette fonction met à jour le contexte + localStorage
    navigate("/"); // 🔁 redirection vers page Welcome
  };

  const menuItemStyle = {
    padding: "12px 20px",
    margin: "4px 12px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  };

  const activeMenuItemStyle = {
    backgroundColor: "#3b82f6",
    color: "white",
    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)",
  };

  const hoverStyle = {
    backgroundColor: "#f3f4f6",
    color: "#1f2937",
    transform: "translateX(2px)",
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "4px 0 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Sidebar
        backgroundColor="rgba(255, 255, 255, 0.95)"
        style={{
          height: "100%",
          backdropFilter: "blur(10px)",
          border: "none",
        }}
      >
        {/* Logo / Header */}
        <div
          style={{
            padding: "24px 20px",
            borderBottom: "1px solid #e5e7eb",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              margin: "0 auto 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
            }}
          >
            📋
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: "600",
              color: "#1f2937",
              letterSpacing: "-0.025em",
            }}
          >
            Mon App
          </h3>
        </div>

        {/* Menu */}
        <Menu
          style={{ padding: "20px 0" }}
          menuItemStyles={{
            button: () => ({
              ...menuItemStyle,
              ...hoverStyle,
            }),
          }}
        >
          <MenuItem
            menuItemStyles={{
              button: () => ({
                ...menuItemStyle,
                ...(isActive("/") ? activeMenuItemStyle : {}),
                "&:hover": hoverStyle,
              }),
            }}
            component={
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "18px" }}>🏠</span>
                Accueil
              </Link>
            }
          />

          <MenuItem
            menuItemStyles={{
              button: () => ({
                ...menuItemStyle,
                ...(isActive("/TaskManager") ? activeMenuItemStyle : {}),
                "&:hover": hoverStyle,
              }),
            }}
            component={
              <Link
                to="/TaskManager"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "18px" }}>✅</span>
                Tâches
              </Link>
            }
          />

          {/* Séparateur */}
          <div
            style={{
              height: "1px",
              backgroundColor: "#e5e7eb",
              margin: "16px 20px",
            }}
          />

          {/* Bouton déconnexion */}
          <MenuItem
            onClick={handleLogout}
            style={{
              color: "#dc2626",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "18px" }}>🚪</span>
            Déconnexion
          </MenuItem>
        </Menu>

        {/* Footer version */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
            padding: "12px",
            backgroundColor: "#f8fafc",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#64748b",
              fontWeight: "500",
            }}
          >
            Version 1.0
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarLayout;
