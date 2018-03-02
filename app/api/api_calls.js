// Simulate a proper API response with a timeout just for development
// purpose

/**
 * Example: Simulate Request Login for Test
 * @param email
 * @param password
 * @return {Promise<any>}
 */
export function authenticate({ email, password, }) { // eslint-disable-line
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@mail.com' && password === 'password') {
        // Response 200
        const r = {
          apiResponse: {
            token: 'token',
            user: {
              email: 'user@mail.com',
              name: 'UserName',
              lastName: 'UserLastName',
            },
          },
        }
        resolve(r)
      } else {
        // Response 401
        const e = {
          apiError: {
            errorMessage: 'Email or password incorrect',
          },
        }
        reject(e)
      }
    }, 700)
  })
}
