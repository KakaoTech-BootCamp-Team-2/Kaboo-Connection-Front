import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HomeMain from "./pages/homepages/HomeMain";
import GlobalStyle from "./components/Common/GlobalStyle";
import { PeopleListPage } from "./pages/PeopleListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
