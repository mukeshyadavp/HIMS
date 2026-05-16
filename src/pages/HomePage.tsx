// src/pages/HomePage.tsx

import "./HomePage.css";
// import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
//   const navigate = useNavigate();

  const modules = [
    {
      title: "Farmer Registry",
      desc: "Manage farmer data and profiles",
      img: "https://img.khetivyapar.com/images/news/1757313513-farmer-registry-documents-eligibility-7765.jpg",
    },
    {
      title: "GIS Monitoring",
      desc: "Satellite & field mapping system",
      img: "https://khetibuddy.com/wp-content/uploads/2024/05/Sattelite-image-of-crops.jpg",
    },
    {
      title: "Crop Monitoring",
      desc: "Track crop health and growth",
      img: "https://images.squarespace-cdn.com/content/v1/57462f541bbee075320514a9/1540493964789-SFXM04IFO0BFQ9YSO2T8/shutterstock_1162991032.jpg",
    },
    {
      title: "Pest Alerts",
      desc: "AI-based pest & disease alerts",
      img: "https://tse2.mm.bing.net/th/id/OIP.lcGJbS7waOGt7TNCxbBdIAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Soil Monitoring",
      desc: "Soil health & fertility tracking",
      img: "https://img.magnific.com/premium-photo/closeup-climatesmart-system-monitoring-soil-quality-large-agricultural-field_996093-2905.jpg?semt=ais_hybrid",
    },
    {
      title: "Dashboards",
      desc: "Analytics & decision support",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
  ];

  return (
    <div className="home-container">

      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">

          <h1>Horticulture Information Management System</h1>

          <p>
            Smart Agriculture • GIS Monitoring • AI Advisory • Farmer Services
          </p>

          {/* <button onClick={() => navigate("/dashboard")}>
            User
          </button> */}

        </div>
      </div>

      {/* MODULE GRID */}
      <div className="grid">
        {modules.map((m, i) => (
          <div key={i} className="card">

            <img src={m.img} alt={m.title} />

            <div className="card-body">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>

          </div>
        ))}
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}