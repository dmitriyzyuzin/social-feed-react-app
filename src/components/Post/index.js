import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { formatDateToSpecificFormat } from '@helpers/date'

class Post extends React.Component {
  render () {
    const { user, text, createdAt } = this.props
    return (
      <Card className='post'>
        <Typography className='post__title' variant='subtitle1'>
          {user}
        </Typography>
        <Typography className='post__date' variant='subtitle2'>
          {formatDateToSpecificFormat(createdAt)}
        </Typography>
        <Typography className='post__text' component='p'>
          {text}
        </Typography>
      </Card>
    )
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default Post
