import "./Header.css";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("User");

  const navigate = useNavigate();
  const location = useLocation();

  // route batti role update
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setRole("Admin");
    } else {
      setRole("User");
    }
  }, [location.pathname]);

  const handleRoleChange = () => {

    if (role === "User") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }

    setOpen(false);
  };

  return (
    <div className="header">

      {/* LEFT */}
      <div className="header-left">

        <img
          src={logo}
          className="logo"
          alt="AP Government Logo"
        />

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

          {/* CURRENT ROLE */}
          <button
            className="user-btn"
            onClick={() => setOpen(!open)}
          >
            {role} ▾
          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="dropdown-menu">

              <button
                className="user-btnn"
                onClick={handleRoleChange}
              >
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