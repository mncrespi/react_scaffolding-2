import React from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

import App from '../components/App'

export default function Root() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </BrowserRouter>
  )
}
