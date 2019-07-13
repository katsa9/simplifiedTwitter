import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData()) //we have access to dispatch because when we connect this component to the store it gets the mapped slice of state (none in this case) as well as dispatch as a prop
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

//connect the App component to the store
//Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions.
export default connect()(App)