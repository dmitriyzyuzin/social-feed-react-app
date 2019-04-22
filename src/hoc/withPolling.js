import React from 'react'

const withPolling = (Component, intervalInSeconds = 60) => {
  class WithPolling extends React.Component {
    componentDidMount () {
      this.startPolling()
    }

    componentWillUnmount () {
      this.stopPolling()
    }

    startPolling = () => {
      if (this.interval) {
        return
      }
      this.trigger(intervalInSeconds * 1000)
    }

    stopPolling = () => {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    }

    onInterval = fn => {
      this.callbackFn = fn
    }

    trigger(intervalDurationInMilliSeconds) {
      if (this.callbackFn) {
        this.interval = setInterval(
          () => this.callbackFn(),
          intervalDurationInMilliSeconds
        )
      }
    }

    render () {
      return (
          <Component
            stopPolling={this.stopPolling}
            onInterval={this.onInterval}
          />
        )
    }
  }

  withPolling.displayName = `withPolling(${Component.displayName || Component.name || 'Component'})`
  return WithPolling
}

export default withPolling
