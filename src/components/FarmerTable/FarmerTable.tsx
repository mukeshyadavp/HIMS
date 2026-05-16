import { useState } from "react";
import { Search } from "lucide-react";
import "./FarmerTable.css";

const farmersData = [
  { id: "F-10021", name: "Raju Naidu", village: "Denduluru", mandal: "Denduluru", district: "West Godavari", crop: "Mango", area: "2.4 ac", status: "Active" },
  { id: "F-10022", name: "Lakshmi Devi", village: "Bethamcherla", mandal: "Bethamcherla", district: "Kurnool", crop: "Chilli", area: "1.8 ac", status: "Active" },
  { id: "F-10023", name: "Venkata Rao", village: "Srikalahasti", mandal: "Srikalahasti", district: "Tirupati", crop: "Tomato", area: "3.1 ac", status: "Active" },
  { id: "F-10024", name: "Srinivas Reddy", village: "Kavali", mandal: "Kavali", district: "SPSR Nellore", crop: "Banana", area: "4.2 ac", status: "Pending" },
  { id: "F-10025", name: "Padma Rani", village: "Anakapalli", mandal: "Anakapalli", district: "Anakapalli", crop: "Papaya", area: "1.5 ac", status: "Active" },
  { id: "F-10026", name: "Krishna Murthy", village: "Palasa", mandal: "Palasa", district: "Srikakulam", crop: "Cashew", area: "6.0 ac", status: "Active" },
  { id: "F-10027", name: "Suresh Babu", village: "Ongole", mandal: "Ongole", district: "Prakasam", crop: "Lime", area: "2.0 ac", status: "Inactive" },
  { id: "F-10028", name: "Meena Kumari", village: "Nandyal", mandal: "Nandyal", district: "Nandyal", crop: "Guava", area: "1.2 ac", status: "Active" },
  { id: "F-10029", name: "Ramakrishna", village: "Eluru", mandal: "Eluru", district: "Eluru", crop: "Coconut", area: "5.5 ac", status: "Active" },
  { id: "F-10030", name: "Vijaya Laxmi", village: "Machilipatnam", mandal: "Machilipatnam", district: "Krishna", crop: "Sweet Lime", area: "2.8 ac", status: "Pending" },
];

const statusClass: Record<string, string> = {
  Active: "status-active",
  Pending: "status-pending",
  Inactive: "status-inactive",
};

const FarmerTable = () => {
  const [search, setSearch] = useState("");

  const filtered = farmersData.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.district.toLowerCase().includes(search.toLowerCase()) ||
      f.crop.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="farmer-table-wrapper">
      <div className="farmer-table-toolbar">
        <div className="farmer-search">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search by name, district, or crop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <span className="farmer-count">{filtered.length} farmers</span>
      </div>
      <div className="farmer-table-scroll">
        <table className="farmer-table">
          <thead>
            <tr>
              <th>Farmer ID</th>
              <th>Name</th>
              <th>Village</th>
              <th>Mandal</th>
              <th>District</th>
              <th>Primary Crop</th>
              <th>Farm Area</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => (
              <tr key={f.id}>
                <td className="farmer-id">{f.id}</td>
                <td>{f.name}</td>
                <td>{f.village}</td>
                <td>{f.mandal}</td>
                <td>{f.district}</td>
                <td>{f.crop}</td>
                <td>{f.area}</td>
                <td>
                  <span className={`status-badge ${statusClass[f.status]}`}>{f.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FarmerTable;
