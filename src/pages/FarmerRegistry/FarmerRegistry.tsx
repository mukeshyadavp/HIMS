// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import FarmerTable from "../../components/FarmerTable/FarmerTable";
import { Users, MapPin, Leaf, CheckCircle } from "lucide-react";
import "./FarmerRegistry.css";

const summaryCards = [
  { label: "Total Registered", value: "1,24,560", icon: <Users size={22} />, color: "#1b5e20" },
  { label: "Farm Plots", value: "84,230", icon: <MapPin size={22} />, color: "#2e7d32" },
  { label: "Crop Varieties", value: "48", icon: <Leaf size={22} />, color: "#388e3c" },
  { label: "Verified Farmers", value: "98,410", icon: <CheckCircle size={22} />, color: "#1565c0" },
];

const FarmerRegistry = () => {
  return (
    // <div className="page-layout">
    // //   <Sidebar />
    // //   <div className="page-content">

    <div className="page-content">
        <Topbar title="Farmer Registry" />

        <div className="fr-summary-grid">
          {summaryCards.map((c, i) => (
            <div className="fr-summary-card" key={i}>
              <div className="fr-summary-icon" style={{ color: c.color }}>{c.icon}</div>
              <div>
                <p className="fr-summary-label">{c.label}</p>
                <h3 className="fr-summary-value" style={{ color: c.color }}>{c.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="page-card">
          <div className="fr-table-header">
            <h4>Farmer Records</h4>
            <button className="fr-export-btn">Export CSV</button>
          </div>
          <FarmerTable />
        </div>
      </div>
    
  );
};

export default FarmerRegistry;
