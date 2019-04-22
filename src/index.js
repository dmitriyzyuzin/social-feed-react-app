import React from 'react'
import ReactDOM from 'react-dom'
import Feed from './pages/Feed'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Feed />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
