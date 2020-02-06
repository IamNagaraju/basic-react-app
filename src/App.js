import React from 'react';
import './App.css';

import RegisterForm from '../src/components/RegisterForm';
import LoginForm from '../src/components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={RegisterForm} exact />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
