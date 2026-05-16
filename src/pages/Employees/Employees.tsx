import Sidebar from "../../components/Sidebar/Sidebar";

const Employees = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Employees</h1>
        </div>

        <div className="page-card">
          <p>Employee management system</p>
        </div>
      </div>
    </div>
  );
};

export default Employees;