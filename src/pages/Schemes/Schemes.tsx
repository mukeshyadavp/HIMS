import Sidebar from "../../components/Sidebar/Sidebar";

const Schemes = () => {
  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="page-header">
          <h1>Government Schemes</h1>
        </div>

        <div className="page-card">
          <p>Scheme management module</p>
        </div>
      </div>
    </div>
  );
};

export default Schemes;