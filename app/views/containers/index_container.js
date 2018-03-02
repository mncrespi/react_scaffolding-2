import React, { Component, } from 'react'
import { Link, } from 'react-router-dom'
import ReactLogo from '../components/ReactLogo'


export default class IndexContainer extends Component {

  static propTypes = {}

  constructor() {
    super()
  }

  render() {
    return  <div>
              <h1>INDEX</h1>
              <Link to="/">INDEX</Link><br />
              <Link to="/protected">PROTECTED</Link><br />
              <Link to="/login">LOGIN</Link><br />
              <Link to="/logout">LOGOUT</Link><br />
              <ReactLogo />
            </div>
  }

}
