import React from 'react';
import './App.css';
import {AmCute} from './Home'
import {Header} from './Header'
import {AboutMe} from './AboutMe';
import {Tiktok} from './Tiktok'
import {Luvie} from './Luvie'
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/tiktok">
            <Header />
            <Tiktok />
          </Route> 
          <Route path="/luvie">
            <Header />
            <Luvie />
          </Route>
          <Route path="/cute_app">
            <Header/>
            <AmCute/>
          </Route>
          <Route path="/">
            <Header />
            <AboutMe />
          </Route> 

        
        </Switch>

        
        
        
        
      </div>
    </Router>
  );
}

export default App;
