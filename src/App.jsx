import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeMain from "./pages/homepages/HomeMain";
import { PeopleListPage } from "./pages/PeopleListPage/PeopleListPage.jsx";
import { PeopleDetailPage } from "./pages/PeopleDetailPage/PeopleDetailPage.jsx";
import ChatPage from "./pages/chat/ChatPage";
import RTCPage from "./pages/WebRTC/VideoPage.jsx";

// QueryClient 인스턴스 생성ß
const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/video" element={<RTCPage />}></Route>
        <Route path="/list" element={<PeopleListPage />} />
        <Route path="/details" element={<PeopleDetailPage />} />
      </Routes>
    </Router>
      </QueryClientProvider>
  );
}

export default App;
