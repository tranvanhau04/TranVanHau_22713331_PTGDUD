import React from "react";
import DashboardLayout from "./pages/DashboardLayout";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Intergrations";
import { Routes, Route } from "react-router-dom";

import "./App.css";
const App = () => {
  return (
   <>
   <main className="flex-1 bg-gray-50 min-h-screen p-4">
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="*" element={<DashboardLayout />} /> {/* fallback */}
        </Routes>
      </main>
   </>
  );
};

export default App;
