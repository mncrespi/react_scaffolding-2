import Types from '../action_types/session'

import { authenticate as authenticateCall, } from '../api/api_calls'

export default function authenticate(email, password) {
  return {
    type: Types.AUTHENTICATE,
    callAPI: () => authenticateCall({
      email,
      password,
    }),
  }
}
