import Sidebar from "../../components/Sidebar/Sidebar";

const PestAlertsPage = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Pest Alerts</h1>
        </div>

        <div className="page-card">
          <p>Pest warning system</p>
        </div>
      </div>
    </div>
  );
};

export default PestAlertsPage;