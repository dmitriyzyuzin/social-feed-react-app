import React from 'react'
import PropTypes from 'prop-types'

class Post extends React.Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <h3>{user}</h3>
      </div>
    )
  }
}

Post.propTypes = {
  user: PropTypes.string
}

export default Post
