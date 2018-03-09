import React, { Component, }         from 'react'
import { Link, }                    from 'react-router-dom'
import { clearToken, }               from '../../api/auth_token'


export default class IndexContainer extends Component {

  componentWillMount() {
    clearToken()
  }

  render() {
    return  <div>
              <h1>LOGOUT</h1>
              <h3>Logged Out!</h3>
              <Link to="/">INDEX</Link><br />
              <Link to="/protected">PROTECTED</Link><br />
              <Link to="/login">LOGIN</Link><br />
              <Link to="/logout">LOGOUT</Link><br />
            </div>
  }

}
