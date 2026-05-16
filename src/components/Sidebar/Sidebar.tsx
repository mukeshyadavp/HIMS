import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Farmer Registry", path: "/dashboard/farmers" },
    { name: "GIS Monitoring", path: "/dashboard/gis" },
    { name: "Crop Monitoring", path: "/dashboard/crop-monitoring" },
    { name: "Pest Alerts", path: "/dashboard/pest-alerts" },
    { name: "Soil Monitoring", path: "/dashboard/soil-monitoring" },
    { name: "Schemes", path: "/dashboard/schemes" },
    { name: "Employees", path: "/dashboard/employees" },
    { name: "Reports", path: "/dashboard/reports" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">HIMS Portal</h2>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active-menu" : ""}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;