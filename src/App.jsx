// Initialize Firebase
import "./Firebase/SetupFirebase";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  DataContext,
  useDataFetch,
} from "./DataContext";

// Components
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/General/Footer";
import Header from "./Components/General/Header";
import ScrollToTop from "./Components/General/ScrollToTop";

import "./App.scss";

function App() {
  const data = useDataFetch();

  return (
    <DataContext.Provider value={data}>
      <Router>
        <Header />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </DataContext.Provider>
  );
}

export default App;
