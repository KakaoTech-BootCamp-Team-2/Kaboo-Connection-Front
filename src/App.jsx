import GlobalStyle from "./components/Common/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PeopleListPage } from "./pages/PeopleListPage/PeopleListPage.jsx";
import { PeopleDetailPage } from "./pages/PeopleDetailPage/PeopleDetailPage.jsx";


function App() {
  return (
    <>
      <GlobalStyle />
        <Router>
            <Routes>
                <Route path="/" element={<PeopleListPage />} />
                <Route path="/details" element={<PeopleDetailPage />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
