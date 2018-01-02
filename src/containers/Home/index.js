import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import logo from './logo.svg'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            <img src={logo} className="Home-logo" alt="logo" />
            <h1 className="title has-text-grey">Welcome to React</h1>
            <p className="Home-intro">
              To get started, edit <code>src/index.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
