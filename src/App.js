import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Header from './Components/General/Header';
import Footer from './Components/General/Footer';
import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import ScrollToTop from './Components/General/ScrollToTop';

const App = () => {
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
