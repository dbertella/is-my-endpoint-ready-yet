import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    yes: false,
    no: false,
  }

  yes = () => {
    this.setState({
      yes: true,
      no: false,
    })
  }

  no = () => {
    this.setState({
      no: true,
      yes: false,
    })
  }

  render() {
    const { yes, no } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-logo" role="img" aria-label="thinking">
            {!(yes || no) && '🤔'}
            {yes && '👏'}
            {no && '👎'}
          </span>
          <p>Is my endpoint ready yet?</p>
          <div>
            <button onClick={this.yes}>Yes</button>
            <button onClick={this.no}>No</button>
          </div>
        </header>
      </div>
    )
  }
}

export default App
