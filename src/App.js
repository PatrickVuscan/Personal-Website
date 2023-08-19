import { createContext, useState, useEffect } from "react";

// Initialize Firebase
import "./Firebase/SetupFirebase";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/General/Footer";
import Header from "./Components/General/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/General/ScrollToTop";

import localData from "./data.json";

import "./App.scss";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState({
    ...localData,
    loaded: false
  });

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/PatrickVuscan/Personal-Website/master/data.json")
      .then(response => response.json())
      .then(fetchedData => {
        console.log(fetchedData);
        setData({
          ...fetchedData,
          loaded: true,
        });
      })
      .catch(error => {
        console.log(error);
        console.log("Potentially stale data being used instead.", localData);
        setData(data => ({
          ...data,
          loaded: true,
        }));
      });
  }, []);

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
