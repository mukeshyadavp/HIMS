import { Users, MapPin, Leaf, Bug, FlaskConical, ShoppingCart } from "lucide-react";
import "./StatsCards.css";

const stats = [
  { label: "Total Farmers", value: "1,24,560", icon: <Users size={28} />, color: "#1b5e20" },
  { label: "Farm Plots", value: "84,230", icon: <MapPin size={28} />, color: "#2e7d32" },
  { label: "Active Schemes", value: "26", icon: <Leaf size={28} />, color: "#388e3c" },
  { label: "Pest Alerts", value: "142", icon: <Bug size={28} />, color: "#c62828" },
  { label: "Soil Reports", value: "3,218", icon: <FlaskConical size={28} />, color: "#5d4037" },
  { label: "Market Updates", value: "18", icon: <ShoppingCart size={28} />, color: "#1565c0" },
];

const StatsCards = () => {
  return (
    <div className="stats-grid">
      {stats.map((s, i) => (
        <div className="stat-card" key={i}>
          <div className="stat-icon" style={{ color: s.color }}>{s.icon}</div>
          <div className="stat-info">
            <p className="stat-label">{s.label}</p>
            <h2 className="stat-value" style={{ color: s.color }}>{s.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
