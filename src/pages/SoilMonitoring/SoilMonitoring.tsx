import Sidebar from "../../components/Sidebar/Sidebar";

const SoilMonitoring = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Soil Monitoring</h1>
        </div>

        <div className="page-card">
          <p>Soil health analytics</p>
        </div>
      </div>
    </div>
  );
};

export default SoilMonitoring;