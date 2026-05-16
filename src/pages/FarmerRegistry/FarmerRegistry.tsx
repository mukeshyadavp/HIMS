import Sidebar from "../../components/Sidebar/Sidebar";

const FarmerRegistry = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Farmer Registry</h1>
        </div>

        <div className="page-card">
          <p>Farmer data table goes here</p>
        </div>
      </div>
    </div>
  );
};

export default FarmerRegistry;