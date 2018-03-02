import React, { Component, } from 'react'
import ReactDOM from 'react-dom'
import { Provider, } from 'react-redux'
import App from './routes/Root'
import configureStore from './store'

const store = configureStore()

class Root extends Component {

  render() {
    return (
        <Provider store={store}>
          <App/>
        </Provider>
    )
  }

}

ReactDOM.render(<Root/>, document.getElementById('root'))
