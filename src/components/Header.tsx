import "./Header.css";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

type HeaderProps = {
  onToggleSidebar?: () => void; // ✅ OPTIONAL FIX
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("User");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setRole("Admin");
    } else {
      setRole("User");
    }
  }, [location.pathname]);

  const handleRoleChange = () => {
    if (role === "User") navigate("/dashboard");
    else navigate("/");

    setOpen(false);
  };

  return (
    <div className="header">

      {/* LEFT */}
      <div className="header-left">

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => onToggleSidebar?.()}   // ✅ SAFE CALL
        >
          <Menu size={22} />
        </button>

        <img src={logo} className="logo" alt="AP Government Logo" />

        <div>
          <h2 className="title">
            Andhra Pradesh Horticulture Information Management System
          </h2>

          <h3 className="subtitle">
            GOVERNMENT OF ANDHRA PRADESH
          </h3>
        </div>

      </div>

      {/* RIGHT */}
      <div className="header-right">

        <div className="dropdown">

          <button
            className="user-btn"
            onClick={() => setOpen(!open)}
          >
            {role} ▾
          </button>

          {open && (
            <div className="dropdown-menu">
              <button className="user-btnn" onClick={handleRoleChange}>
                {role === "User" ? "Admin" : "User"}
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Header;