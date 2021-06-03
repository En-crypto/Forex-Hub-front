import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
            <Header />
              <Switch>
                <Route exact path="/">
                  
                </Route>
                <Route exact path="/about">
                  
                </Route>
                <Route exact path="/contact">
                <Route exact path="/profile">
                  
                  </Route>
                  
                </Route>
              </Switch>
            <Footer />
        </Router>
      </>
    )
  }
}

export default App;
