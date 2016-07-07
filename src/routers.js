// using an ES6 transpiler, like babel 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Lists from './views/list/Lists.jsx';

ReactDOM.render(
	<Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="lists" component={Lists} />
      </Route>
  	</Router>, 
	document.getElementById('react-app')
);
