import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import Header from './components/Header';
import HomeMain from './pages/home/HomeMain';
import ChatMain from './pages/chat/ChatMain';

function App() {


  return (
    <Router>
    <div className="container">
      <Header></Header>
        <Routes>
          <Route path="/" element={<ChatMain />} />
        </Routes>
    </div>
  </Router>
  )
}

export default App;
