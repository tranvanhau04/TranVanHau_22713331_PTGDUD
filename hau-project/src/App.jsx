import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

// Các trang bạn muốn sử dụng trong ứng dụng
import Project from "./pages/Project/Project";
import Team from "./pages/Team/Team";
import Analytics from "./pages/Analytics/Analytics";
import Messages from "./pages/Messages/Messages";
import Integrations from "./pages/Integrations/Integrations";
function App() {
  return (
    <>
    <Header/>
    </>
    // <Router>
    //   <Header />
    //   <Menu />
    //   <Routes>
    //     <Route path="/project" element={<Project />} />
    //     <Route path="/team" element={<Team />} />
    //     <Route path="/analytics" element={<Analytics />} />
    //     <Route path="/messages" element={<Messages />} />
    //     <Route path="/integrations" element={<Integrations />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
