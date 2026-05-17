// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import PestAlerts from "../../components/PestAlerts/PestAlerts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./PestAlertsPage.css";

const districtAlerts = [
  { district: "Kurnool", alerts: 28 },
  { district: "Nellore", alerts: 22 },
  { district: "Krishna", alerts: 18 },
  { district: "Guntur", alerts: 16 },
  { district: "Tirupati", alerts: 14 },
  { district: "Srikakulam", alerts: 12 },
];

const PestAlertsPage = () => {
  return (
    // <div className="page-layout">
    //   <Sidebar />
      <div className="page-content">
        <Topbar title="Pest Alerts & Disease Forewarning" />

        <div className="pa-summary-row">
          <div className="pa-summary-card pa-high"><div className="pa-count">12</div><div className="pa-cat">High Severity</div></div>
          <div className="pa-summary-card pa-medium"><div className="pa-count">38</div><div className="pa-cat">Medium Severity</div></div>
          <div className="pa-summary-card pa-low"><div className="pa-count">92</div><div className="pa-cat">Low Severity</div></div>
          <div className="pa-summary-card pa-districts"><div className="pa-count">18</div><div className="pa-cat">Districts Affected</div></div>
        </div>

        <div className="pa-layout">
          <div>
            <div className="page-card" style={{ marginBottom: 20 }}>
              <h4 className="pa-section-title">Active Alerts</h4>
              <PestAlerts />
            </div>
          </div>

          <div className="page-card">
            <h4 className="pa-section-title">Alerts by District</h4>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={districtAlerts} layout="vertical" margin={{ left: 10, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="district" type="category" tick={{ fontSize: 12 }} width={80} />
                <Tooltip />
                <Bar dataKey="alerts" fill="#c62828" radius={[0, 4, 4, 0]} name="Alerts" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default PestAlertsPage;
