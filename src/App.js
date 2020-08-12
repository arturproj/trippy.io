import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './containers/navigation'

import HomeContainer from './containers/HomeContainer'
import HotelsContainer from './containers/HotelsContainer'
import HotelContainer from './containers/HotelContainer'

class App extends React.Component{
  render(){
    return(
      <>
        <Nav />
        <Router>         
          <Switch>
            <Route path="/hotels/:id" component={HotelContainer} />
            <Route path="/hotels" component={HotelsContainer} />
            <Route path="/login">
              <HomeContainer />
            </Route>
            <Route path="/signup">
              <HomeContainer />
            </Route>
            <Route path="*">
              <HomeContainer />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
