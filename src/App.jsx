import Layout from "./components/Common/Layout";
import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Header from "./components/Common/Header";
import HomePage from "./pages/Homepage/HomePage.jsx";
import {VideoPage} from "./pages/VideoPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/video" element={<VideoPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
