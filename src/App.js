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
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path={['/', '/about']} render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
