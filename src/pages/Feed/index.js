import React, { Component } from 'react'
import withPolling from '@hoc/withPolling'
import FeedApiService from '@services/feedApi'
import {
  UPDATE_INTERVAL,
  NUMBER_OF_POSTS,
  FEED_API_URL
} from './config'
import Post from '@components/Post'

class Feed extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    console.log('componentDidMount props: ', this.props)
    FeedApiService.get(FEED_API_URL, NUMBER_OF_POSTS)
      .then(posts => {
        this.setState({ posts }, () => {
          console.log('updated state. state not: ', this.state)
        })
        console.log('posts: ', posts)
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }

  render () {
    console.log('props: ', this.props)
    return (
      <div>
        {this.state.posts.map(item => (
          <Post post={item} />
        ))}
      </div>
    )
  }
}

export default withPolling(Feed, UPDATE_INTERVAL)
