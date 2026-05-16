import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../pages/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import FarmerRegistry from "../pages/FarmerRegistry/FarmerRegistry";
import GISMonitoring from "../pages/GISMonitoring/GISMonitoring";
import CropMonitoring from "../pages/CropMonitoring/CropMonitoring";
import PestAlertsPage from "../pages/PestAlertsPage/PestAlertsPage";
import SoilMonitoring from "../pages/SoilMonitoring/SoilMonitoring";
import Schemes from "../pages/Schemes/Schemes";
import Employees from "../pages/Employees/Employees";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";
import MarketInfo from "../pages/MarketInfo/MarketInfo";
import Advisory from "../pages/Advisory/Advisory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="farmers" element={<FarmerRegistry />} />
        <Route path="gis" element={<GISMonitoring />} />
        <Route path="crop-monitoring" element={<CropMonitoring />} />
        <Route path="pest-alerts" element={<PestAlertsPage />} />
        <Route path="soil-monitoring" element={<SoilMonitoring />} />
        <Route path="schemes" element={<Schemes />} />
        <Route path="market" element={<MarketInfo />} />
        <Route path="advisory" element={<Advisory />} />
        <Route path="employees" element={<Employees />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
