// App.js
import React from 'react';
import Task1 from './components/main-components/Task1';
import Task2 from './components/main-components/Task2';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#task1">Завдання 1</a></li>
          <li><a href="#task2">Завдання 2</a></li>
        </ul>
      </nav>
    </div>
  );
}

{window.location.hash === "#task1" && <Task1 />}
{window.location.hash === "#task2" && <Task2 />}

export default App;
