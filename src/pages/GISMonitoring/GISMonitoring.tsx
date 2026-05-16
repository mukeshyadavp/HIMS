import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import GISMap from "../../components/GISMap/GISMap";
import "./GISMonitoring.css";

const layerControls = [
  { label: "Farm Plots", active: true },
  { label: "Pest Alert Zones", active: true },
  { label: "Satellite NDVI", active: false },
  { label: "Soil Moisture", active: false },
  { label: "Rainfall Heatmap", active: false },
];

const GISMonitoring = () => {
  return (
    <div className="page-layout">
      <Sidebar />
      <div className="page-content">
        <Topbar title="GIS Monitoring" />

        <div className="gis-layout">
          <div className="gis-map-panel page-card" style={{ padding: 0 }}>
            <GISMap />
          </div>

          <div className="gis-controls-panel">
            <div className="page-card gis-layers-card">
              <h4 className="gis-panel-title">Map Layers</h4>
              <ul className="gis-layer-list">
                {layerControls.map((l, i) => (
                  <li key={i} className="gis-layer-item">
                    <label>
                      <input type="checkbox" defaultChecked={l.active} />
                      {l.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="page-card gis-stats-card">
              <h4 className="gis-panel-title">Coverage Stats</h4>
              <div className="gis-stat-row"><span>Total Mapped Farms</span><strong>84,230</strong></div>
              <div className="gis-stat-row"><span>Geo-tagged Plots</span><strong>71,640</strong></div>
              <div className="gis-stat-row"><span>Districts Covered</span><strong>26 / 26</strong></div>
              <div className="gis-stat-row"><span>Satellite Passes</span><strong>4 / month</strong></div>
              <div className="gis-stat-row"><span>Active Pest Zones</span><strong style={{ color: "#c62828" }}>8</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GISMonitoring;
