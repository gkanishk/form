import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import User from './Components/User'
import Admin from './Components/Admin'
import Thankyou from './Components/Thankyou'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
