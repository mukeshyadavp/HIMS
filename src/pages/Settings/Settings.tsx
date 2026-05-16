import Sidebar from "../../components/Sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Settings</h1>
        </div>

        <div className="page-card">
          <p>Portal settings</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;