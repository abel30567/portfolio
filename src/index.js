import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import About from './screens/About';
import Portfolio from './screens/Portfolio';
import Blog from './screens/Blog';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/blog' component={Blog} />
      </div>
    </Router>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
