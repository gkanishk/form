import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import User from './Components/User'
import Admin from './Components/Admin'
import Thankyou from './Components/Thankyou'
import Main from './Main'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path='/'>
            <Main/>
          </Route>
          <Route path='/thankyou'>
            <Thankyou/>
          </Route>
          <Route path='/admin'>
            <Admin/>
          </Route>
          <Route path='/user'>
            <User/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
