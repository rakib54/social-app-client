import './App.css';
import { Container } from '@material-ui/core'
import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';

function App() {

  return (
    <Router>
      <Container maxidth='lg'>
        <Navbar />
        <Switch> 
          <Route path="/auth">
            <Auth></Auth>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>


      </Container>
    </Router>
  );
}

export default App;
