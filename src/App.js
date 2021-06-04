import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/App.css';
import { SocialIcon } from 'react-social-icons';




class App extends React.Component {

  render() {
    console.log('app', this.props)
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">

            </Route>

            <Route exact path="/AboutUs">
              <AboutUs />
            </Route>

            <Route exact path="/contact">

            </Route>

            <Route exact path="/profile">

            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
