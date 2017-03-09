import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './app';
import Agents from './pages/agents';
import Record from './pages/record';
import Players from './pages/players';
import Preferences from './pages/preferences';

let pageIndex = -1;
render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute index={ ++ pageIndex } component={Agents} />
            <Route index={ ++ pageIndex } path='record' component={Record} />
            <Route index={ ++ pageIndex } path='players' component={Players} />
            <Route index={ ++ pageIndex } path='prefenerces' component={Preferences} />
        </Route>
    </Router>
    , document.getElementById('wrapper'));