import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">

      {/* HEADER */}
      <Header onToggleSidebar={() => setSidebarOpen(prev => !prev)} />

      <div className="body">

        {/* SIDEBAR (ALWAYS RENDERED) */}
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* CONTENT */}
        <div className="content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;