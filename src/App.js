import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './page/homepage';
import ReactQueryPage from './page/reactQueryPage';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>
          Homepage
        </Link>
        <Link to="/react-query">
          React Query
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
