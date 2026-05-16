import HomePage from "./pages/HomePage";
import AppRoutes from "./routes/AppRoutes";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Dashboard + Sidebar Pages */}
      <Route path="/dashboard/*" element={<AppRoutes />} />

    </Routes>
  );
}

export default App;