// using an ES6 transpiler, like babel 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './views/App.jsx';

import Lists from './views/list/Lists.jsx';

import Project from './views/project';
import Service from './views/service';
import Study from './views/study';
import Personal from './views/personal';

ReactDOM.render(
	<Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Project} />
        <Route path="project" component={Project} />
		<Route path="service" component={Service} />
        <Route path="study" component={Study} />
        <Route path="personal" component={Personal} />
        <Route path="lists" component={Lists} />
      </Route>
  	</Router>, 
	document.getElementById('react-app')
);
