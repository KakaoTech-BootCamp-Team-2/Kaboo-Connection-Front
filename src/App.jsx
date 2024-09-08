import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "./components/Common/Header";
import HomeMain from "./pages/homepages/HomeMain";
import GlobalStyle from "./components/Common/GlobalStyle";
import { PeopleListPage } from "./pages/PeopleListPage/PeopleListPage.jsx";
import { PeopleDetailPage } from "./pages/PeopleDetailPage/PeopleDetailPage.jsx";
import ChatPage from "./pages/chat/ChatPage";
import RTCPage from "./pages/VideoPage";
import LoginPage from "./pages/LoginPage.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/video" element={<RTCPage />}></Route>
        <Route path="/list" element={<PeopleListPage />} />
        <Route path="/details" element={<PeopleDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
