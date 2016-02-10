/* @flow */
import React, {Component} from 'react'
import {Link} from 'react-router'
// my files
import Header from '../components/Header/Header'
// material-ui
import RaisedButton from 'material-ui/lib/raised-button'
import Colors from 'material-ui/lib/styles/colors'
import IconButton from 'material-ui/lib/icon-button'


class App extends Component {
  render() {
    console.log('from App', this.props)
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

export default App