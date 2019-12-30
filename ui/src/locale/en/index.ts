import Translation from '../translation'

const en: Translation = {
  login: {
    buttonLogin: 'Login',
    checkLoginSave: 'Remember Me',
    labelLogin: 'Login',
    labelLoginId: 'ID',
    labelLoginPage: 'Ttt',
    labelLoginPassword: 'Password',
  },
  error: {
    errorLoginAuthentication: 'ID or Password is incorrect.',
    errorConnection: 'Connection error.',
  },
  http: {
    unexpectedJsonError: {
      name: 'unexpectedJsonError',
      description: 'Unexpected error encountered',
    },
    serviceUnavailable: {
      name: 'serviceUnavailable',
      description: 'Service unavailable',
    },
  },
} as const

export default en
