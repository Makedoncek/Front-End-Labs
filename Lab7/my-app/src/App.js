// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Task1 from './components/main-components/Task1';
import Task2 from './components/main-components/Task2';

function App() {
  return (
    <Router>
      <div>
        <h2>Лабораторна робота 7:</h2>
        <Link to="/task1">Завдання 1</Link>
        <br />
        <Link to="/task2">Завдання 2</Link>

        <Switch>
          <Route path="/task1" component={Task1} />
          <Route path="/task2" component={Task2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
