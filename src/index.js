import React from 'react'
import ReactDOM from 'react-dom'
import Feed from './pages/Feed'

class App extends React.Component {
  render () {
    return (
      <Feed />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
