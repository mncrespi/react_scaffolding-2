import React from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

/** Nested-Routes */
import ProtectedRoutes              from './protected_routes'

/** Containers */
import IndexContainer               from '../views/containers/index_container'
import LoginContainer               from '../views/containers/login_container'
import LogoutContainer              from '../views/containers/logout_container'


export default function Root() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexContainer}/>
          <Route path="/protected" component={ProtectedRoutes} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/logout" component={LogoutContainer}/>
          <Route render={() => { return <h1>ERROR 404</h1> }}/>
        </Switch>
      </BrowserRouter>
  )
}
