/* @flow */
import React, {Component} from 'react'
// my files
import Header from '../components/Header/Header'
// material-ui


class App extends Component {
  render() {
    console.log('From App, Props: ', this.props)
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

export default App