// import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import "./MarketInfo.css";

const mandiPrices = [
  { commodity: "Mango (Banganapalle)", mandi: "Kurnool APMC", today: 4200, yesterday: 3800, unit: "₹/Qtl", trend: "up" },
  { commodity: "Chilli (Teja)", mandi: "Guntur APMC", today: 18500, yesterday: 19200, unit: "₹/Qtl", trend: "down" },
  { commodity: "Tomato", mandi: "Madanapalle APMC", today: 1800, yesterday: 1750, unit: "₹/Qtl", trend: "up" },
  { commodity: "Banana (Robusta)", mandi: "Eluru APMC", today: 2200, yesterday: 2200, unit: "₹/Qtl", trend: "stable" },
  { commodity: "Papaya", mandi: "Vijayawada APMC", today: 1200, yesterday: 1100, unit: "₹/Qtl", trend: "up" },
  { commodity: "Coconut", mandi: "Narsapur APMC", today: 2800, yesterday: 2900, unit: "₹/100 nos", trend: "down" },
  { commodity: "Lime", mandi: "Ongole APMC", today: 5600, yesterday: 5600, unit: "₹/Qtl", trend: "stable" },
  { commodity: "Guava", mandi: "Nandyal APMC", today: 2400, yesterday: 2100, unit: "₹/Qtl", trend: "up" },
];

const priceHistory = [
  { date: "10 May", mango: 3600, chilli: 19800, tomato: 1650 },
  { date: "11 May", date2: "11 May", mango: 3800, chilli: 19500, tomato: 1700 },
  { date: "12 May", mango: 3900, chilli: 19000, tomato: 1720 },
  { date: "13 May", mango: 4000, chilli: 19200, tomato: 1750 },
  { date: "14 May", mango: 3800, chilli: 19200, tomato: 1750 },
  { date: "15 May", mango: 4200, chilli: 18500, tomato: 1800 },
];

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "up") return <TrendingUp size={16} color="#2e7d32" />;
  if (trend === "down") return <TrendingDown size={16} color="#c62828" />;
  return <Minus size={16} color="#888" />;
};

const MarketInfo = () => {
  return (
    // <div className="page-layout">
    //   <Sidebar />
      <div className="page-content">
        <Topbar title="Market Information" />

        <div className="mi-summary-row">
          <div className="mi-sum-card"><div className="mi-val">48</div><div className="mi-key">Active Mandis / APMCs</div></div>
          <div className="mi-sum-card"><div className="mi-val">28</div><div className="mi-key">Commodities Tracked</div></div>
          <div className="mi-sum-card"><div className="mi-val">18</div><div className="mi-key">Price Updates Today</div></div>
          <div className="mi-sum-card mi-alert"><div className="mi-val">3</div><div className="mi-key">Price Drop Alerts</div></div>
        </div>

        <div className="page-card mi-price-card">
          <h4 className="mi-section-title">Today's Mandi Prices — 15 May 2026</h4>
          <table className="mi-table">
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Mandi / APMC</th>
                <th>Today's Price</th>
                <th>Yesterday</th>
                <th>Unit</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {mandiPrices.map((m, i) => (
                <tr key={i}>
                  <td><strong>{m.commodity}</strong></td>
                  <td>{m.mandi}</td>
                  <td className={m.trend === "up" ? "price-up" : m.trend === "down" ? "price-down" : ""}>{m.today.toLocaleString("en-IN")}</td>
                  <td>{m.yesterday.toLocaleString("en-IN")}</td>
                  <td>{m.unit}</td>
                  <td><TrendIcon trend={m.trend} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="page-card">
          <h4 className="mi-section-title">Price History — Top Crops (₹/Qtl)</h4>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={priceHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="mango" stroke="#1b5e20" strokeWidth={2} name="Mango" />
              <Line type="monotone" dataKey="chilli" stroke="#c62828" strokeWidth={2} name="Chilli" />
              <Line type="monotone" dataKey="tomato" stroke="#f57c00" strokeWidth={2} name="Tomato" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    // </div>
  );
};

export default MarketInfo;
