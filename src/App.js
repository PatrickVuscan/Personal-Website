import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

// Initialize Firebase
import "./Firebase/SetupFirebase";

// React Components
import Header from './Components/General/Header';
import Footer from './Components/General/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import ScrollToTop from './Components/General/ScrollToTop';

import './App.scss';

// Import backup data
import localData from "./data.json";

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

  const history = useHistory();

  return (
    <Router history={history}>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path={['/', '/about']} render={() => <About />} />
          <Route exact path="/experience" render={() => <Experience />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
