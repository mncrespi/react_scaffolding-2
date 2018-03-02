import { applyMiddleware, createStore, } from 'redux'
import { createLogger, } from 'redux-logger'
import rootReducer from '../reducers'
import asyncActionsMiddleware from '../middleware/async_actions_middleware'

const logger = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV !== 'production',
  duration: true,
  timestamp: true,
  level: (process.env.NODE_ENV !== 'production') ? 'log' : 'error',
})

const createStoreWithMiddleware = applyMiddleware(
    asyncActionsMiddleware,
    logger
)(createStore)


export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  // todo: validate store
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  // if (module.hot) {
  //   module.hot.accept('./config/Root', () => {
  //     const newApp = require('./config/Root').default
  //     render(newApp)
  //   })
  // }


  return store
}
