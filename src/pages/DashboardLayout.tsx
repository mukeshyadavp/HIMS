import Header from "../components/Header";
// import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="layout">

      {/* TOP HEADER */}
      <Header />

      <div className="body">

        {/* LEFT SIDEBAR */}
        {/* <Sidebar /> */}

        {/* PAGE CONTENT */}
        <div className="content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;