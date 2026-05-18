// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { BookOpen, Leaf, Cloud, FlaskConical, Bug, ChevronRight } from "lucide-react";
import "./Advisory.css";

const advisories = [
  {
    id: "ADV-001",
    title: "Mango Pre-Harvest Management",
    crop: "Mango",
    category: "Crop Protection",
    date: "14 May 2026",
    icon: <Leaf size={18} />,
    summary: "Apply Copper Oxychloride 3g/L + Streptomycin 0.5g/L to manage bacterial canker and anthracnose 4 weeks before harvest.",
    steps: [
      "Prune dead/diseased branches 6 weeks prior to harvest.",
      "Apply Carbendazim 0.1% spray at fruit development stage.",
      "Ensure adequate potassium nutrition for fruit quality.",
      "Avoid overhead irrigation during fruit maturation.",
    ],
  },
  {
    id: "ADV-002",
    title: "Chilli Drought Stress Management",
    crop: "Chilli",
    category: "Irrigation Advisory",
    date: "13 May 2026",
    icon: <Cloud size={18} />,
    summary: "Districts in Kurnool and Kadapa are experiencing moisture stress. Adopt deficit irrigation practices to improve water use efficiency.",
    steps: [
      "Switch to drip irrigation if available.",
      "Apply mulching to reduce soil moisture loss.",
      "Foliar spray of 2% KNO3 to reduce stress symptoms.",
      "Monitor soil moisture at 15 cm depth weekly.",
    ],
  },
  {
    id: "ADV-003",
    title: "Tomato Soil Preparation for Kharif 2026",
    crop: "Tomato",
    category: "Soil Management",
    date: "12 May 2026",
    icon: <FlaskConical size={18} />,
    summary: "Begin deep ploughing and incorporate FYM at 10 tons/ha before transplanting. Conduct soil testing to identify nutrient gaps.",
    steps: [
      "Deep plough twice before monsoon onset.",
      "Apply 10 t/ha Farm Yard Manure (FYM).",
      "Incorporate 50 kg/ha Trichoderma viride.",
      "Submit soil samples to nearest soil testing lab.",
    ],
  },
  {
    id: "ADV-004",
    title: "Banana Pseudostem Weevil Control",
    crop: "Banana",
    category: "Pest Management",
    date: "11 May 2026",
    icon: <Bug size={18} />,
    summary: "Increased incidence of Cosmopolites sordidus in Godavari districts. Immediate cultural and chemical control measures recommended.",
    steps: [
      "Remove and burn infested pseudostems.",
      "Install pheromone traps @ 1 trap/ha.",
      "Apply Chlorpyrifos 2.5 ml/L around pseudostem base.",
      "Practice crop rotation after harvest.",
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Crop Protection": "#1b5e20",
  "Irrigation Advisory": "#1565c0",
  "Soil Management": "#5d4037",
  "Pest Management": "#c62828",
};

const Advisory = () => {
  return (
    // <div className="page-layout">
    //   <Sidebar />
      <div className="page-content">
        <Topbar title="Farm Advisory" />

        <div className="adv-summary-row">
          <div className="adv-sum-card"><BookOpen size={22} color="#1b5e20" /><div><div className="adv-val">142</div><div className="adv-key">Total Advisories</div></div></div>
          <div className="adv-sum-card"><Leaf size={22} color="#2e7d32" /><div><div className="adv-val">18</div><div className="adv-key">This Month</div></div></div>
          <div className="adv-sum-card"><Bug size={22} color="#c62828" /><div><div className="adv-val">24</div><div className="adv-key">Pest Advisories</div></div></div>
          <div className="adv-sum-card"><Cloud size={22} color="#1565c0" /><div><div className="adv-val">12</div><div className="adv-key">Weather Based</div></div></div>
        </div>

        <div className="adv-list">
          {advisories.map((a) => (
            <div className="adv-card page-card" key={a.id}>
              <div className="adv-card-header">
                <div className="adv-icon" style={{ color: categoryColors[a.category] }}>{a.icon}</div>
                <div className="adv-card-meta">
                  <div className="adv-title">{a.title}</div>
                  <div className="adv-tags">
                    <span className="adv-crop-tag">{a.crop}</span>
                    <span className="adv-cat-tag" style={{ background: `${categoryColors[a.category]}18`, color: categoryColors[a.category] }}>
                      {a.category}
                    </span>
                    <span className="adv-date">{a.date}</span>
                  </div>
                </div>
              </div>

              <p className="adv-summary">{a.summary}</p>

              <div className="adv-steps-title">Recommended Actions:</div>
              <ul className="adv-steps">
                {a.steps.map((step, i) => (
                  <li key={i}><ChevronRight size={13} color="#1b5e20" />{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default Advisory;
