import { AlertTriangle, Bug, Leaf } from "lucide-react";
import "./PestAlerts.css";

const alerts = [
  {
    id: "PA-001",
    pest: "Thrips",
    crop: "Chilli",
    severity: "High",
    districts: ["Kurnool", "Kadapa"],
    advisory: "Apply Spinosad 45% SC @ 0.3 ml/L or Fipronil 5% SC @ 1.5 ml/L. Avoid use of broad-spectrum insecticides.",
    date: "15 May 2026",
  },
  {
    id: "PA-002",
    pest: "Leaf Curl Virus",
    crop: "Tomato",
    severity: "High",
    districts: ["SPSR Nellore", "Prakasam"],
    advisory: "Remove and destroy infected plants. Control whitefly vector with Imidacloprid 17.8 SL @ 0.3 ml/L.",
    date: "14 May 2026",
  },
  {
    id: "PA-003",
    pest: "Mealybug",
    crop: "Mango",
    severity: "Medium",
    districts: ["Krishna", "West Godavari"],
    advisory: "Spray neem oil 3% or Chlorpyrifos 20 EC @ 2 ml/L during early morning or evening.",
    date: "13 May 2026",
  },
  {
    id: "PA-004",
    pest: "Panama Wilt",
    crop: "Banana",
    severity: "Medium",
    districts: ["East Godavari", "Eluru"],
    advisory: "Use disease-free suckers. Drench soil with Carbendazim 1 g/L around root zone.",
    date: "12 May 2026",
  },
  {
    id: "PA-005",
    pest: "Fruit Fly",
    crop: "Papaya",
    severity: "Low",
    districts: ["Anakapalli", "Visakhapatnam"],
    advisory: "Install methyl eugenol traps @ 10/ha. Collect and destroy fallen fruits regularly.",
    date: "11 May 2026",
  },
];

const severityClass: Record<string, string> = {
  High: "severity-high",
  Medium: "severity-medium",
  Low: "severity-low",
};

const PestAlerts = () => {
  return (
    <div className="pest-alerts-list">
      {alerts.map((a) => (
        <div key={a.id} className={`pest-alert-card ${severityClass[a.severity]}`}>
          <div className="pest-alert-header">
            <div className="pest-alert-title">
              <Bug size={16} />
              <strong>{a.pest}</strong>
              <span className={`severity-badge ${severityClass[a.severity]}`}>{a.severity}</span>
            </div>
            <span className="pest-date">{a.date}</span>
          </div>
          <div className="pest-alert-body">
            <div className="pest-meta">
              <span><Leaf size={13} /> Crop: {a.crop}</span>
              <span>Districts: {a.districts.join(", ")}</span>
            </div>
            <div className="pest-advisory">
              <AlertTriangle size={13} />
              <span>{a.advisory}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PestAlerts;
