// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import StatsCards from "../../components/StatsCards/StatsCards";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import PestAlerts from "../../components/PestAlerts/PestAlerts";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend
} from "recharts";
import "./Dashboard.css";

const cropData = [
  { crop: "Mango", farms: 1240 },
  { crop: "Chilli", farms: 980 },
  { crop: "Tomato", farms: 870 },
  { crop: "Banana", farms: 760 },
  { crop: "Papaya", farms: 540 },
  { crop: "Coconut", farms: 490 },
];

const monthlyRegistrations = [
  { month: "Jan", farmers: 420 },
  { month: "Feb", farmers: 380 },
  { month: "Mar", farmers: 610 },
  { month: "Apr", farmers: 530 },
  { month: "May", farmers: 490 },
];

const Dashboard = () => {
  return (
    // <div className="page-layout">
    //   <Sidebar />
    //   <div className="page-content">
    <div className="page-content">
        <Topbar title="Dashboard" />
        <StatsCards />
        <WeatherCard />

        <div className="dashboard-charts">
          <div className="chart-card">
            <h4 className="chart-title">Crop Distribution (Farms)</h4>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={cropData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="crop" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="farms" fill="#2e7d32" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h4 className="chart-title">Farmer Registrations (2026)</h4>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={monthlyRegistrations} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="farmers" stroke="#1b5e20" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-bottom">
          <div className="section-card">
            <h4 className="section-title">Recent Pest Alerts</h4>
            <PestAlerts />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Dashboard;
