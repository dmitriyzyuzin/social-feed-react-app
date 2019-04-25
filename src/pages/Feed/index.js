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

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    const oldPostIds = this.state.posts.map(item => item.id)
    const newPostIds = nextState.posts.map(item => item.id)

    return !this.isEqualOneDimensionalArrays(oldPostIds, newPostIds)
  }

  isEqualOneDimensionalArrays (arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false
    }

    const sortedArr1 = arr1.sort()
    const sortedArr2 = arr2.sort()

    if (sortedArr1.length !== sortedArr2.length) {
      return false
    }

    return sortedArr1.every((item, index) => item === sortedArr1[index])
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
      .then(this.filterPosts)
      .then(posts => {
        this.setState({ posts })
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }

  filterPosts (arr) {
    return Array.isArray(arr) ? arr.slice(0, NUMBER_OF_POSTS) : []
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
