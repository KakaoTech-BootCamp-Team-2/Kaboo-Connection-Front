import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { PeopleListPage } from "./pages/PeopleListPage/PeopleListPage.jsx";
import { PeopleDetailPage } from "./pages/PeopleDetailPage/PeopleDetailPage.jsx";
import ChatPage from "./pages/chat/ChatPage";
import KakaoRedirect from "./pages/join/KakoRedirect.jsx";
import JoinPage from "./pages/join/JoinPage.jsx";
import RTCPage from "./pages/WebRTC/VideoPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PeopleListPage } from './pages/PeopleListPage/PeopleListPage.jsx';
import { PeopleDetailPage } from './pages/PeopleDetailPage/PeopleDetailPage.jsx';
import ChatPage from './pages/chat/ChatPage';
import RTCPage from './pages/VideoPage';
import LoginPage from "./pages/kakaologin/LoginPage.jsx";
// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
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
       </QueryClientProvider>
  );
}

export default App;
