// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";
import "./CropMonitoring.css";

const cropHealth = [
  { crop: "Mango", ndvi: 0.72, area: 12400, health: "Good" },
  { crop: "Chilli", ndvi: 0.58, area: 9800, health: "Moderate" },
  { crop: "Tomato", ndvi: 0.65, area: 8700, health: "Good" },
  { crop: "Banana", ndvi: 0.70, area: 7600, health: "Good" },
  { crop: "Papaya", ndvi: 0.55, area: 5400, health: "Moderate" },
  { crop: "Coconut", ndvi: 0.78, area: 4900, health: "Excellent" },
];

const radarData = [
  { subject: "NDVI", A: 72 },
  { subject: "Moisture", A: 65 },
  { subject: "Chlorophyll", A: 80 },
  { subject: "Canopy", A: 58 },
  { subject: "Stress Index", A: 40 },
];

const growthData = [
  { week: "W1", mango: 0.60, chilli: 0.50, tomato: 0.55 },
  { week: "W2", mango: 0.63, chilli: 0.52, tomato: 0.58 },
  { week: "W3", mango: 0.68, chilli: 0.55, tomato: 0.62 },
  { week: "W4", mango: 0.72, chilli: 0.58, tomato: 0.65 },
];

const healthClass: Record<string, string> = {
  Excellent: "health-excellent",
  Good: "health-good",
  Moderate: "health-moderate",
};

const CropMonitoring = () => {
  return (
    // <div className="page-layout">
    //   <Sidebar />
      <div className="page-content">
        <Topbar title="Crop Monitoring" />

        <div className="cm-table-card page-card">
          <h4 className="cm-section-title">Crop Health Summary (Satellite NDVI)</h4>
          <table className="cm-table">
            <thead>
              <tr>
                <th>Crop</th>
                <th>NDVI Score</th>
                <th>Area (Ha)</th>
                <th>Health Status</th>
              </tr>
            </thead>
            <tbody>
              {cropHealth.map((c, i) => (
                <tr key={i}>
                  <td>{c.crop}</td>
                  <td>
                    <div className="ndvi-bar-wrap">
                      <div className="ndvi-bar" style={{ width: `${c.ndvi * 100}%` }} />
                      <span>{c.ndvi.toFixed(2)}</span>
                    </div>
                  </td>
                  <td>{c.area.toLocaleString()}</td>
                  <td><span className={`health-badge ${healthClass[c.health]}`}>{c.health}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cm-charts-grid">
          <div className="page-card">
            <h4 className="cm-section-title">NDVI Trend (4 Weeks)</h4>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis domain={[0.4, 0.9]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="mango" fill="#1b5e20" name="Mango" />
                <Bar dataKey="chilli" fill="#c62828" name="Chilli" />
                <Bar dataKey="tomato" fill="#f57c00" name="Tomato" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="page-card">
            <h4 className="cm-section-title">Crop Health Radar</h4>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Radar name="Score" dataKey="A" stroke="#1b5e20" fill="#2e7d32" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

  );
};

export default CropMonitoring;
