import { useState } from "react";
import { Bell, Globe, User } from "lucide-react";
import "./Topbar.css";

interface TopbarProps {
  title: string;
}

const Topbar = ({ title }: TopbarProps) => {
  const [lang, setLang] = useState<"en" | "te">("en");

  return (
    <div className="topbar">
      <h2 className="topbar-title">{title}</h2>
      <div className="topbar-actions">
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === "en" ? "te" : "en")}
          title="Toggle Language"
        >
          <Globe size={16} />
          {lang === "en" ? "English" : "తెలుగు"}
        </button>
        <div className="topbar-icon-btn">
          <Bell size={18} />
          <span className="notification-dot" />
        </div>
        <div className="topbar-icon-btn">
          <User size={18} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
