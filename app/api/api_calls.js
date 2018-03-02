const EMAIL = 'user@mail.com'

// Simulate a proper API response with a timeout just for development
// purpose

const validAuthBody = {
  apiResponse: {
    token: 'token',
    user: {
      email: EMAIL,
      name: 'UserName',
      lastName: 'UserLastName',
    },
  },
}

const invalidAuthBody = {
  apiError: {
    errorMessage: 'Email or password incorrect',
  },
}


export default function authenticate({ email, password, }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === EMAIL && password === 'password') {
        resolve(validAuthBody)
      } else {
        reject(invalidAuthBody)
      }
    }, 700)
  })
}
