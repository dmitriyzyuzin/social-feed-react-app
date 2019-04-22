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

const About = () => (<div>about...</div>)

ReactDOM.render(<App />, document.getElementById('app'))
