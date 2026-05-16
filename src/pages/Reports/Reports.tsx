import Sidebar from "../../components/Sidebar/Sidebar";

const Reports = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Reports</h1>
        </div>

        <div className="page-card">
          <p>Reports and analytics</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;