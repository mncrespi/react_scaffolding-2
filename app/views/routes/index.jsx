import React                        from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
}                                   from 'react-router-dom';

/** Nested-Routes */
import ProtectedRoutes              from './protected_routes';

/** Containers */
import IndexContainer               from '../containers/index_container';
import LoginContainer               from '../containers/login_container';
import LogoutContainer              from '../containers/logout_container';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexContainer} />
        <Route path="/protected" component={ProtectedRoutes} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/logout" component={LogoutContainer} />
        <Route render={() => { return <h1>ERROR 404</h1> }} />
      </Switch>
    </BrowserRouter>
  )
}
