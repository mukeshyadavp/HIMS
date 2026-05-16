import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Dashboard</h1>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Farmers</h3>
            <h2>1,24,560</h2>
          </div>

          <div className="dashboard-card">
            <h3>Farms</h3>
            <h2>84,230</h2>
          </div>

          <div className="dashboard-card">
            <h3>Schemes</h3>
            <h2>26</h2>
          </div>

          <div className="dashboard-card">
            <h3>Pest Alerts</h3>
            <h2>142</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;