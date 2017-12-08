import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import './app.css';
import About from '../components/about';
import ESLint from '../components/eslint';
import Fetchy from '../components/fetchy';

// Simple dumb component that returns HTML
const App = () => (
  <Router>
    <div>
      <p><b>Hi</b>.</p>
      <p>Here are some basic things this project has going for it:</p>
      <ul>
        <li><Link to="/fetch">FETCHY</Link></li>
        <li>reusable <Link to="/components">component architecture</Link></li>
        <li>routing <sup>(click ↑)</sup></li>
        <li><a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">redux</a> (managing state)</li>
        <li>unit tests using <a href="https://facebook.github.io/jest/" target="_blank" rel="noopener noreferrer">Jest</a></li>
        <li>linting - we like clean code. <Link to="/eslint">Extending</Link> airbnb's excellent <a href="https://www.npmjs.com/package/eslint-config-airbnb" rel="noopener noreferrer" target="_blank">starting point</a></li>
        <li>an async call or two for some data. We'll use something like Axios or Fetch.</li>
      </ul>
      <Route path="/components" component={About} />
      <Route path="/eslint" component={ESLint} />
      <Route path="/fetch" component={Fetchy} />
    </div>
  </Router>
);

export default App;
