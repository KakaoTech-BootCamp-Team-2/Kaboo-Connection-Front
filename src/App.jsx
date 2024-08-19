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
import HomeMain from "./pages/homepages/HomeMain";
import ChatMain from "./pages/chat/ChatMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/chat" element={<ChatMain />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
