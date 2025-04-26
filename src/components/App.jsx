import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/App.css";
import Arrays from "./Arrays";
import Strings from "./Strings";
import Numbers from "./Numbers";
import NumberSystem from "./NumberSystem";
import Sorting from "./Sorting";
import Info from "./Info";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>TCS NQT Coding Sheet Tracker ✅</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/arrays">
                Arrays
                <img
                  src="/assets/Arrays.svg"
                  alt="Arrays icon"
                  style={{ width: "24px", height: "24px", marginLeft: "8px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/strings">
                Strings
                <img
                  src="/assets/Strings.svg"
                  alt="Strings icon"
                  style={{ width: "24px", height: "24px", marginLeft: "8px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/number-system">
                Number System
                <img
                  src="/assets/Number System.svg"
                  alt="Number System icon"
                  style={{ width: "24px", height: "24px", marginLeft: "8px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/numbers">
                Numbers
                <img
                  src="/assets/Numbers.svg"
                  alt="Number System icon"
                  style={{ width: "24px", height: "24px", marginLeft: "8px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/sorting">
                Sorting
                <img
                  src="/assets/Sorting.svg"
                  alt="Number System icon"
                  style={{ width: "24px", height: "24px", marginLeft: "8px" }}
                />
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/number-system" element={<NumberSystem />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/sorting" element={<Sorting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
