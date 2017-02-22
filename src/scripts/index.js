import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './app';
import Agents from './pages/agents';
import Record from './pages/record';
import Players from './pages/players';
import Preferences from './pages/preferences';
console.log(App);
render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Agents} />
            <Route path='record' component={Record} />
            <Route path='players' component={Players} />
            <Route path='preferences' component={Preferences} />
        </Route>
    </Router>
    , document.getElementById('wrapper'));