import React, { Component, } from 'react'
import { Redirect, Route, Switch, withRouter, } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isTokenSet, } from '../../api/auth_token'
import HomeContainer from '../containers/home_container'
import MeContainer from '../containers/me_container'


class ProtectedRoutes extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor() {
    super()
  }

  componentWillMount() {
    if (!isTokenSet()) {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
        <Switch>
          <Route path={this.props.match.url + '/home'} component={HomeContainer}/>
          <Route path={this.props.match.url + '/me'} component={MeContainer}/>
          <Route render={() => {
            if (!isTokenSet()) {
              return <Redirect to="/login"/>
            } else {
              return <Redirect to={this.props.match.url + '/home'}/>
            }
          }}
          />
        </Switch>
    )
  }

}


export default withRouter((ProtectedRoutes))
