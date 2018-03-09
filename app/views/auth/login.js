import React, { Component, } from 'react'
import { Link, } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Login extends Component {

  static propTypes = {
    authenticationError: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    authenticationError: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
    })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value, })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value, })
  }

  renderAuthenticationErrors() {
    if (this.props.authenticationError) {
      return <div>{this.props.authenticationError.errorMessage}</div>
    }
    return false
  }

  render() {
    return (
        <div className="loginContainer">
          <div className="loginBox">
            <h1>Enter your credential</h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>

              {this.renderAuthenticationErrors()}

              <input
                  value={this.state.email}
                  onChange={(e) => this.handleEmailChange(e)}
                  type="email"
                  placeholder="Email"
              />

              <input
                  value={this.state.password}
                  onChange={(e) => this.handlePasswordChange(e)}
                  type="password"
                  placeholder="Password"
              />

              <div>
                <input type="submit" value="Login"/>
              </div>

            </form>
          </div>
          <div>
            <Link to="/">INDEX</Link>
          </div>
        </div>
    )
  }

}
