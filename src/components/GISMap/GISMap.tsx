import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./GISMap.css";

// Fix leaflet default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const farmPlots = [
  { id: "FP-001", lat: 16.5062, lng: 80.648, farmer: "Raju Naidu", crop: "Mango", area: "2.4 ac", health: "Good" },
  { id: "FP-002", lat: 15.8281, lng: 78.0373, farmer: "Lakshmi Devi", crop: "Chilli", area: "1.8 ac", health: "Alert" },
  { id: "FP-003", lat: 13.6288, lng: 79.4192, farmer: "Venkata Rao", crop: "Tomato", area: "3.1 ac", health: "Good" },
  { id: "FP-004", lat: 14.4426, lng: 79.9865, farmer: "Srinivas Reddy", crop: "Banana", area: "4.2 ac", health: "Monitor" },
  { id: "FP-005", lat: 17.3616, lng: 82.8554, farmer: "Padma Rani", crop: "Papaya", area: "1.5 ac", health: "Good" },
  { id: "FP-006", lat: 18.3029, lng: 83.8938, farmer: "Krishna Murthy", crop: "Cashew", area: "6.0 ac", health: "Good" },
];

const pestZones = [
  { lat: 15.8281, lng: 78.0373, radius: 25000, color: "#c62828", label: "Thrips Alert - Kurnool" },
  { lat: 14.4426, lng: 79.9865, radius: 18000, color: "#f57c00", label: "Leaf Curl - Nellore" },
];

const GISMap = () => {
  return (
    <div className="gis-map-wrapper">
      <div className="gis-legend">
        <span className="legend-good">● Good Health</span>
        <span className="legend-alert">● Pest Alert</span>
        <span className="legend-monitor">● Monitor</span>
        <span className="legend-zone">◯ Alert Zone</span>
      </div>
      <MapContainer center={[15.9129, 79.74]} zoom={7} className="gis-map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {farmPlots.map((plot) => (
          <Marker key={plot.id} position={[plot.lat, plot.lng]}>
            <Popup>
              <strong>{plot.id}</strong><br />
              Farmer: {plot.farmer}<br />
              Crop: {plot.crop}<br />
              Area: {plot.area}<br />
              Health: <strong>{plot.health}</strong>
            </Popup>
          </Marker>
        ))}
        {pestZones.map((zone, i) => (
          <Circle
            key={i}
            center={[zone.lat, zone.lng]}
            radius={zone.radius}
            pathOptions={{ color: zone.color, fillOpacity: 0.15 }}
          >
            <Popup>{zone.label}</Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default GISMap;
