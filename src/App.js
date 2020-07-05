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

function App() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="App">
            Testing
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
