import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Table from './Table';
import Hero from './Hero';
import './css/App.css';
import { withAuth0 } from '@auth0/auth0-react';
// import '@coreui/dist/css/coreui.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/App.css';
import Profile from './components/Profile';
import Form from './components/ContactUs';



class App extends React.Component {

  render() {
    console.log('app', this.props)
    return (
      
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Hero />
          <div className='body'>
                <Table />
          </div>
            </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/contact">
            <Form/>
          </Route>
          <Route exact path="/about">
              <AboutUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default withAuth0(App);
