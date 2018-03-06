import { withRouter, } from 'react-router-dom'
import { connect, } from 'react-redux'
import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import Login from '../auth/login'
import { isTokenSet, } from '../../api/auth_token'
import { authenticate, } from '../../action_creators/session_action_creator'


const mapStateToProps = (state) => ({
  authenticationError: state.session.authenticationError,
})


/**
 * This is the entry point for any page that requires a logged in user
 */
class LoginContainer extends Component {

  static propTypes = {
    authenticationError: PropTypes.object,
    dispatch: PropTypes.func,
    // match: PropTypes.object.isRequired,
    // location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static defaultProps = {
    authenticationError: false,
    dispatch: () => {},
  }

  constructor() {
    super()
  }

  componentWillMount() {
    if (isTokenSet()) {
      this.props.history.push('/protected')
    }
  }

  handleSubmit({ email, password, }) {
    const { dispatch, } = this.props

    dispatch(authenticate(email, password))
        .then((result) => {
          if (result.apiError) return

          this.props.history.push('/protected')
        })
  }

  render() {
    return (
        <Login
            onSubmit={(e) => this.handleSubmit(e)}
            authenticationError={this.props.authenticationError}
        />
    )
  }

}


export default withRouter(connect(mapStateToProps)(LoginContainer))
