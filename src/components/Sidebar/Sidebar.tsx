import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, Map, Sprout, Bug, FlaskConical,
  ClipboardList, UserCog, BarChart2, Settings, ShoppingCart, BookOpen
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={17} /> },
  { name: "Farmer Registry", path: "/dashboard/farmers", icon: <Users size={17} /> },
  { name: "GIS Monitoring", path: "/dashboard/gis", icon: <Map size={17} /> },
  { name: "Crop Monitoring", path: "/dashboard/crop-monitoring", icon: <Sprout size={17} /> },
  { name: "Pest Alerts", path: "/dashboard/pest-alerts", icon: <Bug size={17} /> },
  { name: "Soil Monitoring", path: "/dashboard/soil-monitoring", icon: <FlaskConical size={17} /> },
  { name: "Schemes", path: "/dashboard/schemes", icon: <ClipboardList size={17} /> },
  { name: "Market Info", path: "/dashboard/market", icon: <ShoppingCart size={17} /> },
  { name: "Farm Advisory", path: "/dashboard/advisory", icon: <BookOpen size={17} /> },
  { name: "Employees", path: "/dashboard/employees", icon: <UserCog size={17} /> },
  { name: "Reports", path: "/dashboard/reports", icon: <BarChart2 size={17} /> },
  { name: "Settings", path: "/dashboard/settings", icon: <Settings size={17} /> },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: Props) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay only in mobile */}
      {open && <div className="sidebar-overlay" onClick={onClose}></div>}

      {/* SINGLE SIDEBAR */}
      <aside className={`sidebar ${open ? "open-mobile" : ""}`}>
        <div className="sidebar-brand">
          <div className="sidebar-logo">🌿</div>
          <div>
            <div className="sidebar-title">HIMS</div>
            <div className="sidebar-subtitle">Horticulture Portal</div>
          </div>
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active-menu" : ""}
              onClick={onClose}
            >
              <Link to={item.path}>
                <span className="sidebar-icon">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </aside>
    </>
  );
};

export default Sidebar;