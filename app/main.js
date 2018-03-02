import React, { Component, } from 'react'
import ReactDOM from 'react-dom'
import { Provider, } from 'react-redux'
import App from './routes/Root'

class Root extends Component {

  render() {
    return (
        <Provider>
          <App/>
        </Provider>
    )
  }

}

ReactDOM.render(<Root/>, document.getElementById('root'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { AppContainer, } from 'react-hot-loader'
//
// import Root from './routes/Root'
//
// const render = (Component) => {
//   ReactDOM.render(
//       <AppContainer>
//         <Component />
//       </AppContainer>,
//       document.getElementById('root'),
//   )
// }
//
// render(Root)
//
// if (module.hot) {
//   module.hot.accept('./routes/Root', () => {
//     const newApp = Root
//     render(newApp)
//   })
// }
