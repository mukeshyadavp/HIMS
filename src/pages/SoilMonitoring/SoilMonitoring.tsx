import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend
} from "recharts";
import "./SoilMonitoring.css";

const soilData = [
  { district: "Guntur", ph: 6.8, nitrogen: 72, phosphorus: 58, potassium: 80, moisture: 42, quality: "Good" },
  { district: "Krishna", ph: 7.1, nitrogen: 65, phosphorus: 50, potassium: 74, moisture: 38, quality: "Good" },
  { district: "Kurnool", ph: 7.6, nitrogen: 48, phosphorus: 42, potassium: 62, moisture: 25, quality: "Poor" },
  { district: "Nellore", ph: 6.5, nitrogen: 80, phosphorus: 65, potassium: 85, moisture: 55, quality: "Excellent" },
  { district: "Tirupati", ph: 6.9, nitrogen: 70, phosphorus: 60, potassium: 78, moisture: 48, quality: "Good" },
];

const moistureTrend = [
  { week: "W1", Guntur: 38, Krishna: 35, Kurnool: 20 },
  { week: "W2", Guntur: 40, Krishna: 36, Kurnool: 22 },
  { week: "W3", Guntur: 44, Krishna: 38, Kurnool: 24 },
  { week: "W4", Guntur: 42, Krishna: 38, Kurnool: 25 },
];

const qualityClass: Record<string, string> = {
  Excellent: "sq-excellent",
  Good: "sq-good",
  Moderate: "sq-moderate",
  Poor: "sq-poor",
};

const SoilMonitoring = () => {
  return (
    <div className="page-layout">
      <Sidebar />
      <div className="page-content">
        <Topbar title="Soil Monitoring" />

        <div className="sm-summary-row">
          <div className="sm-summary-card"><div className="sm-val">3,218</div><div className="sm-key">Soil Tests Done</div></div>
          <div className="sm-summary-card"><div className="sm-val">6.8</div><div className="sm-key">Avg pH Level</div></div>
          <div className="sm-summary-card"><div className="sm-val">43%</div><div className="sm-key">Avg Moisture</div></div>
          <div className="sm-summary-card sm-alert-card"><div className="sm-val">142</div><div className="sm-key">Deficiency Alerts</div></div>
        </div>

        <div className="page-card sm-table-card">
          <h4 className="sm-section-title">District-wise Soil Health Report</h4>
          <table className="sm-table">
            <thead>
              <tr>
                <th>District</th>
                <th>pH</th>
                <th>Nitrogen (%)</th>
                <th>Phosphorus (%)</th>
                <th>Potassium (%)</th>
                <th>Moisture (%)</th>
                <th>Quality</th>
              </tr>
            </thead>
            <tbody>
              {soilData.map((s, i) => (
                <tr key={i}>
                  <td>{s.district}</td>
                  <td>{s.ph}</td>
                  <td>{s.nitrogen}</td>
                  <td>{s.phosphorus}</td>
                  <td>{s.potassium}</td>
                  <td>{s.moisture}</td>
                  <td><span className={`sq-badge ${qualityClass[s.quality]}`}>{s.quality}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm-charts-grid">
          <div className="page-card">
            <h4 className="sm-section-title">Nutrient Levels by District</h4>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={soilData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="district" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="nitrogen" fill="#1b5e20" name="Nitrogen" />
                <Bar dataKey="phosphorus" fill="#f57c00" name="Phosphorus" />
                <Bar dataKey="potassium" fill="#1565c0" name="Potassium" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="page-card">
            <h4 className="sm-section-title">Soil Moisture Trend (4 Weeks)</h4>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={moistureTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Guntur" stroke="#1b5e20" strokeWidth={2} />
                <Line type="monotone" dataKey="Krishna" stroke="#1565c0" strokeWidth={2} />
                <Line type="monotone" dataKey="Kurnool" stroke="#c62828" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilMonitoring;
