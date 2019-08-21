import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch(err, info) {
    if (err) this.setState({ error: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>We had issues loading the weather forecast. Please try again later</h1>;
    }

    return this.props.children
  }
}