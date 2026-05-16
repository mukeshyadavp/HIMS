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
      desc: "Manage farmer data, profiles & geo-tagged farm plots",
      img: "https://img.khetivyapar.com/images/news/1757313513-farmer-registry-documents-eligibility-7765.jpg",
    },
    {
      title: "GIS Monitoring",
      desc: "Satellite & field mapping with NDVI overlays",
      img: "https://khetibuddy.com/wp-content/uploads/2024/05/Sattelite-image-of-crops.jpg",
    },
    {
      title: "Crop Monitoring",
      desc: "Track crop health, NDVI & growth analytics",
      img: "https://images.squarespace-cdn.com/content/v1/57462f541bbee075320514a9/1540493964789-SFXM04IFO0BFQ9YSO2T8/shutterstock_1162991032.jpg",
    },
    {
      title: "Pest Alerts",
      desc: "AI-based pest & disease forewarning system",
      img: "https://tse2.mm.bing.net/th/id/OIP.lcGJbS7waOGt7TNCxbBdIAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Soil Monitoring",
      desc: "Soil quality, moisture & nutrient tracking",
      img: "https://img.magnific.com/premium-photo/closeup-climatesmart-system-monitoring-soil-quality-large-agricultural-field_996093-2905.jpg?semt=ais_hybrid",
    },
    {
      title: "Government Schemes",
      desc: "Scheme guidance, applications & disbursement",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
    },
    {
      title: "Market Information",
      desc: "Live mandi prices & market price feeds",
      img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400",
    },
    {
      title: "Farm Advisory",
      desc: "Crop-specific advisory & pest management tips",
      img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
    },
    {
      title: "Analytics Dashboard",
      desc: "Multi-level decision support dashboards",
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