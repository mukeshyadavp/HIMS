import "./Header.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="header">

      {/* LEFT */}
      <div className="header-left">

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
            User ▾
          </button>

          {open && (
            <div className="dropdown-menu">

              <button
               className="user-btnn"
                onClick={() => {
                  setOpen(false);
                  navigate("/dashboard");
                }}
              >
                Admin
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Header;