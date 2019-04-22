import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withPolling from '@hoc/withPolling'
import FeedApiService from '@services/feedApi'
import {
  UPDATE_INTERVAL,
  NUMBER_OF_POSTS,
  FEED_API_URL
} from './config'
import Post from '@components/Post'
import './style.css'

class Feed extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    this.getPosts()
    this.props.onInterval(this.getPosts)
  }

  componentWillUnmount () {
    this.props.stopPolling()
  }

  getPosts () {
    FeedApiService.get(FEED_API_URL, NUMBER_OF_POSTS)
      .then(posts => {
        this.setState({ posts })
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }

  render () {
    const posts = this.state.posts.map(item => (
      <Post
        key={item.id}
        user={item.user}
        text={item.text}
        createdAt={item.createdAt}
      />
    ))
    return posts
  }
}

Feed.propTypes = {
  onInterval: PropTypes.func,
  stopPolling: PropTypes.func
}

export default withPolling(Feed, UPDATE_INTERVAL)
