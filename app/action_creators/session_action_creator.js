import Types from '../action_types/session'

import { authenticate as authenticateCall, } from '../api/api_calls'

export function authenticate(email, password) { // eslint-disable-line
  return {
    type: Types.AUTHENTICATE,
    callAPI: () => authenticateCall({
      email,
      password,
    }),
  }
}
