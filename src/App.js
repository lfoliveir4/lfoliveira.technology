import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './screen/HomeScreen'
// import Projects from './screen/ProjectScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
