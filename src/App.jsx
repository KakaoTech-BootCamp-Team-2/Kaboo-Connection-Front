import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// 페이지 및 컴포넌트 가져오기
import Header from './components/Common/Header';
import HomeMain from './pages/homepages/HomeMain';
import GlobalStyle from './components/Common/GlobalStyle';
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
          <Header />
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomeMain />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
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
