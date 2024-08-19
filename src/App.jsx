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
import { PeopleListPage } from "./pages/PeopleListPage";
import ChatPage from "./pages/chat/ChatPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
