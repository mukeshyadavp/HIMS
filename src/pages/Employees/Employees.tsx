// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Users, Building2, UserCheck, ChevronRight } from "lucide-react";
import "./Employees.css";

const employees = [
  { id: "EMP-001", name: "Sri. K. Venkatesh", designation: "Director of Horticulture", level: "State", district: "Vijayawada", phone: "9876543210", status: "Active" },
  { id: "EMP-002", name: "Smt. P. Radha", designation: "Joint Director", level: "State", district: "Vijayawada", phone: "9876543211", status: "Active" },
  { id: "EMP-003", name: "Sri. M. Raju", designation: "Deputy Director", level: "District", district: "Guntur", phone: "9876543212", status: "Active" },
  { id: "EMP-004", name: "Sri. S. Narayana", designation: "Horticulture Officer", level: "District", district: "Krishna", phone: "9876543213", status: "Active" },
  { id: "EMP-005", name: "Smt. L. Devi", designation: "Horticulture Officer", level: "District", district: "Kurnool", phone: "9876543214", status: "On Leave" },
  { id: "EMP-006", name: "Sri. V. Kumar", designation: "Field Assistant", level: "Mandal", district: "Tirupati", phone: "9876543215", status: "Active" },
  { id: "EMP-007", name: "Sri. A. Prasad", designation: "Field Assistant", level: "Mandal", district: "Nellore", phone: "9876543216", status: "Active" },
  { id: "EMP-008", name: "Smt. G. Lakshmi", designation: "Data Entry Operator", level: "Mandal", district: "Srikakulam", phone: "9876543217", status: "Active" },
];

const orgHierarchy = [
  { level: "State HQ", role: "Director of Horticulture", count: 1 },
  { level: "State HQ", role: "Joint Director / Deputy Director", count: 4 },
  { level: "District", role: "District Horticulture Officer", count: 26 },
  { level: "Division", role: "Divisional Horticulture Officer", count: 78 },
  { level: "Mandal", role: "Mandal Horticulture Officer", count: 660 },
  { level: "Field", role: "Field Assistants", count: 2400 },
];

const statusClass: Record<string, string> = {
  Active: "emp-active",
  "On Leave": "emp-leave",
  Inactive: "emp-inactive",
};

const Employees = () => {
  return (
    // <div className="page-layout">
    //   <Sidebar />
      <div className="page-content">
        <Topbar title="Employee Management" />

        <div className="emp-summary-row">
          <div className="emp-sum-card"><Users size={22} color="#1b5e20" /><div><div className="emp-val">3,169</div><div className="emp-key">Total Employees</div></div></div>
          <div className="emp-sum-card"><Building2 size={22} color="#1565c0" /><div><div className="emp-val">26</div><div className="emp-key">Districts Covered</div></div></div>
          <div className="emp-sum-card"><UserCheck size={22} color="#2e7d32" /><div><div className="emp-val">2,940</div><div className="emp-key">Active Staff</div></div></div>
          <div className="emp-sum-card"><Users size={22} color="#f57c00" /><div><div className="emp-val">229</div><div className="emp-key">On Leave / Other</div></div></div>
        </div>

        <div className="emp-layout">
          <div className="page-card emp-hierarchy-card">
            <h4 className="emp-section-title">Organizational Hierarchy</h4>
            <div className="emp-hierarchy-list">
              {orgHierarchy.map((h, i) => (
                <div className="emp-hierarchy-item" key={i}>
                  <div className="emp-hierarchy-level">{h.level}</div>
                  <ChevronRight size={14} color="#aaa" />
                  <div className="emp-hierarchy-role">{h.role}</div>
                  <div className="emp-hierarchy-count">{h.count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card emp-table-card">
            <h4 className="emp-section-title">Employee Directory</h4>
            <table className="emp-table">
              <thead>
                <tr>
                  <th>Emp ID</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Level</th>
                  <th>District</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id}>
                    <td className="emp-id">{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.designation}</td>
                    <td><span className="emp-level">{e.level}</span></td>
                    <td>{e.district}</td>
                    <td><span className={`emp-status ${statusClass[e.status]}`}>{e.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Employees;
