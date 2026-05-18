// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { CheckCircle, Clock, IndianRupee, FileText } from "lucide-react";
import "./Schemes.css";

const schemes = [
  {
    id: "SCH-001",
    name: "PM Kisan Samman Nidhi",
    ministry: "Ministry of Agriculture",
    benefit: "₹6,000/year",
    beneficiaries: 42800,
    status: "Active",
    category: "Income Support",
    deadline: "31 Mar 2027",
  },
  {
    id: "SCH-002",
    name: "YSR Rythu Bharosa",
    ministry: "Govt. of Andhra Pradesh",
    benefit: "₹13,500/year",
    beneficiaries: 38500,
    status: "Active",
    category: "Income Support",
    deadline: "31 Mar 2027",
  },
  {
    id: "SCH-003",
    name: "National Horticulture Mission",
    ministry: "Ministry of Agriculture",
    benefit: "50% subsidy on inputs",
    beneficiaries: 12400,
    status: "Active",
    category: "Input Subsidy",
    deadline: "31 Dec 2026",
  },
  {
    id: "SCH-004",
    name: "Rashtriya Krishi Vikas Yojana",
    ministry: "Ministry of Agriculture",
    benefit: "Project-based funding",
    beneficiaries: 6800,
    status: "Active",
    category: "Infrastructure",
    deadline: "31 Mar 2026",
  },
  {
    id: "SCH-005",
    name: "Pradhan Mantri Fasal Bima Yojana",
    ministry: "Ministry of Agriculture",
    benefit: "Crop insurance",
    beneficiaries: 29000,
    status: "Active",
    category: "Insurance",
    deadline: "31 Jul 2026",
  },
  {
    id: "SCH-006",
    name: "Soil Health Card Scheme",
    ministry: "Ministry of Agriculture",
    benefit: "Free soil testing",
    beneficiaries: 18200,
    status: "Ongoing",
    category: "Soil Health",
    deadline: "Ongoing",
  },
];

const statusClass: Record<string, string> = {
  Active: "scheme-active",
  Ongoing: "scheme-ongoing",
  Closed: "scheme-closed",
};

const Schemes = () => {
  return (
    // <div className="page-layout">
    //   <Sidebar />
      <div className="page-content">
        <Topbar title="Government Schemes" />

        <div className="sch-summary-row">
          <div className="sch-sum-card"><CheckCircle size={22} color="#1b5e20" /><div><div className="sch-sum-val">26</div><div className="sch-sum-key">Active Schemes</div></div></div>
          <div className="sch-sum-card"><IndianRupee size={22} color="#1565c0" /><div><div className="sch-sum-val">₹284 Cr</div><div className="sch-sum-key">Disbursed (FY26)</div></div></div>
          <div className="sch-sum-card"><FileText size={22} color="#388e3c" /><div><div className="sch-sum-val">1,47,700</div><div className="sch-sum-key">Total Beneficiaries</div></div></div>
          <div className="sch-sum-card"><Clock size={22} color="#f57c00" /><div><div className="sch-sum-val">3,420</div><div className="sch-sum-key">Pending Applications</div></div></div>
        </div>

        <div className="page-card">
          <h4 className="sch-section-title">Scheme Directory</h4>
          <table className="sch-table">
            <thead>
              <tr>
                <th>Scheme ID</th>
                <th>Scheme Name</th>
                <th>Ministry / Dept.</th>
                <th>Category</th>
                <th>Benefit</th>
                <th>Beneficiaries</th>
                <th>Valid Until</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {schemes.map((s) => (
                <tr key={s.id}>
                  <td className="sch-id">{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.ministry}</td>
                  <td><span className="sch-category">{s.category}</span></td>
                  <td>{s.benefit}</td>
                  <td>{s.beneficiaries.toLocaleString()}</td>
                  <td>{s.deadline}</td>
                  <td><span className={`sch-status ${statusClass[s.status]}`}>{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    // </div>
  );
};

export default Schemes;
