import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line
} from "recharts";
import { Download, FileText } from "lucide-react";
import "./Reports.css";

const districtCrop = [
  { district: "Guntur", mango: 3200, chilli: 4200, tomato: 2100 },
  { district: "Krishna", mango: 2800, chilli: 1800, tomato: 3200 },
  { district: "Kurnool", mango: 1200, chilli: 5600, tomato: 900 },
  { district: "Nellore", mango: 2100, chilli: 2200, tomato: 2800 },
  { district: "Tirupati", mango: 1800, chilli: 1400, tomato: 3600 },
];

const schemeDistribution = [
  { name: "PM Kisan", value: 42800, color: "#1b5e20" },
  { name: "YSR Rythu Bharosa", value: 38500, color: "#2e7d32" },
  { name: "Fasal Bima", value: 29000, color: "#43a047" },
  { name: "NHM", value: 12400, color: "#66bb6a" },
  { name: "Others", value: 25000, color: "#a5d6a7" },
];

const monthlyTrend = [
  { month: "Jan", registrations: 420, schemes: 180, alerts: 32 },
  { month: "Feb", registrations: 380, schemes: 210, alerts: 28 },
  { month: "Mar", registrations: 610, schemes: 260, alerts: 45 },
  { month: "Apr", registrations: 530, schemes: 240, alerts: 38 },
  { month: "May", registrations: 490, schemes: 220, alerts: 42 },
];

const recentReports = [
  { name: "District-wise Crop Area Report - May 2026", type: "Crop", date: "15 May 2026" },
  { name: "Soil Health Summary - Q1 FY2026-27", type: "Soil", date: "10 May 2026" },
  { name: "Pest Surveillance Report - April 2026", type: "Pest", date: "5 May 2026" },
  { name: "Scheme Disbursement Report - FY2025-26", type: "Scheme", date: "1 May 2026" },
  { name: "Farmer Registration Status - May 2026", type: "Farmer", date: "15 May 2026" },
];

const Reports = () => {
  return (
    <div className="page-layout">
      <Sidebar />
      <div className="page-content">
        <Topbar title="Reports & Analytics" />

        <div className="rp-charts-grid">
          <div className="page-card">
            <h4 className="rp-section-title">District-wise Crop Distribution (Ha)</h4>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={districtCrop}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="district" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="mango" fill="#1b5e20" name="Mango" />
                <Bar dataKey="chilli" fill="#c62828" name="Chilli" />
                <Bar dataKey="tomato" fill="#f57c00" name="Tomato" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="page-card">
            <h4 className="rp-section-title">Scheme Beneficiaries</h4>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={schemeDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {schemeDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="page-card rp-trend-card">
          <h4 className="rp-section-title">Monthly Activity Trend (2026)</h4>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="registrations" stroke="#1b5e20" strokeWidth={2} name="Farmer Registrations" />
              <Line type="monotone" dataKey="schemes" stroke="#1565c0" strokeWidth={2} name="Scheme Applications" />
              <Line type="monotone" dataKey="alerts" stroke="#c62828" strokeWidth={2} name="Pest Alerts" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="page-card">
          <h4 className="rp-section-title">Recent Reports</h4>
          <table className="rp-table">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Category</th>
                <th>Generated Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((r, i) => (
                <tr key={i}>
                  <td><FileText size={14} style={{ marginRight: 6 }} />{r.name}</td>
                  <td><span className="rp-type">{r.type}</span></td>
                  <td>{r.date}</td>
                  <td>
                    <button className="rp-download-btn"><Download size={13} /> Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
