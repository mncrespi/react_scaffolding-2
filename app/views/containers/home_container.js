import React, { Component, }         from 'react'
import { Link, }                     from 'react-router-dom'

export default class HomeContainer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div>
          <h1>Protected Content::Home</h1>
          <Link to="/">INDEX</Link><br />
          <Link to="/protected">PROTECTED</Link><br />
          <Link to="/protected/home">PROTECTED-Home</Link><br />
          <Link to="/protected/me">PROTECTED-Me</Link><br />
          <Link to="/login">LOGIN</Link><br />
          <Link to="/logout">LOGOUT</Link><br />
        </div>
      </div>
    )
  }

}
