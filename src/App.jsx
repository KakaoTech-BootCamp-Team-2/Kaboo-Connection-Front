import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeMain from "./pages/homepages/HomeMain";
import { PeopleListPage } from "./pages/PeopleListPage/PeopleListPage.jsx";
import { PeopleDetailPage } from "./pages/PeopleDetailPage/PeopleDetailPage.jsx";
import ChatPage from "./pages/chat/ChatPage";
import RTCPage from "./pages/WebRTC/VideoPage.jsx";
import LoginPage from "./pages/kakaologin/LoginPage.jsx";
import KakaoRedirect from "./pages/join/KakoRedirect.jsx";
import JoinPage from "./pages/join/JoinPage.jsx";

// QueryClient 인스턴스 생성ß
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PeopleListPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/video/:roomName" element={<RTCPage />}></Route>
        <Route path="/list" element={<PeopleListPage />} />
        <Route path="/details" element={<PeopleDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/code/kakao" element={<KakaoRedirect />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </Router>
  );
}

export default App;
