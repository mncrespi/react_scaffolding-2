import Types from '../action_types/session'
import { storeToken, } from '../api/auth_token'
import matchesAction from './utils/matches_action'
import * as ih from './utils/immutable_helpers'

const initialState = ih.immutable({
  authenticating: false,
  authenticationError: null,
  user: null,
})


export default function sessionReducer(state = initialState, action) {
  let st = state

  if (matchesAction(action, Types.AUTHENTICATE.request)) {
    st = ih.set(st, 'authenticating', true)
  }

  if (matchesAction(action, Types.AUTHENTICATE.done)) {
    storeToken(action.apiResponse.token)

    st = ih.set(st, 'authenticating', false)
    st = ih.set(st, 'user', action.apiResponse.user)
  }

  if (matchesAction(action, Types.AUTHENTICATE.fail)) {
    st = ih.set(st, 'authenticationError', action.apiError)
    st = ih.set(st, 'authenticating', false)
  }

  return st
}
