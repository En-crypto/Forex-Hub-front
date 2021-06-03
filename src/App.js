import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import Hero from './Hero';
import './css/App.css';
// import '@coreui/dist/css/coreui.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Hero/>
            <Table/>
            </Route>
            <Route exact path="/profile">

            </Route>
            <Route exact path="/contact">
            </Route>

            <Route exact path="/about">

            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
