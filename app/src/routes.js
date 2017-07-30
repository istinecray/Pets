import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import requireAuth from 'utilities/requireAuth';

import App from 'root/App';
import Home from 'components/pages/Home/';
import About from 'components/pages/About/';
import Login from 'components/pages/Login/';
import Register from 'components/pages/Register/';
import Account from 'components/pages/Account/';
import Games from 'components/pages/Games/';
import World from 'components/pages/World/';
import News from 'components/pages/News/';
import Forum from 'components/pages/Forum/';
import Help from 'components/pages/Help/';
 
class Routes extends Component {
  render() {
    return ( 
      <Router>
        <App>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/account' component={requireAuth(Account)} />
            <Route path='/games' component={requireAuth(Games)} />
            <Route path='/world' component={requireAuth(World)} />
            <Route path='/news' component={News} />
            <Route path='/forum' component={requireAuth(Forum)} />
            <Route path='/help' component={requireAuth(Help)} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default Routes;