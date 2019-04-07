import React from 'react'
import methods from './lib/methods'
import { retrieveToken, storeToken } from './utils/handleToken'

import Nav from './components/Nav'
import EMPRouter from './components/EMPRouter'

class App extends React.Component {

  state = {
    showMenu: false,
    user: {},
    time: new Date(),
    token: null
  }

  componentDidMount() {
    const token = retrieveToken('EMP')
    if (token) {
      this.verifyToken(token)
    } else {
      this.setState({ loading: false, token: null })
    }
    this.setTime()
  }

  setTime = () => setInterval(() => this.setState({ currentTime: new Date() }), 1000)

  changeMenuState = () => this.setState({ showMenu: !this.state.showMenu })

  login = credentials => {
    methods.login(credentials, (err, result) => {
      if (err) {
        return console.error(err)
      }
      this.setState(result)
      this.getUser(result.token)
    })
  }

  logout = token => {
    methods.logout(this.state.token, (err, result) => {
      if (err) {
        return console.error(err)
      }
      this.setState(result)
    })
  }

  verifyToken = token => {
    methods.verifyToken(token, result => {
      this.setState({ token: result })
      if (result) {
        this.getUser(token)
      }
    })
  }

  getUser = token => {
    methods.getUser(token, (err, result) => {
      if (err) {
        return console.error(err)
      }
      const user = result.data
      this.setState({ user })
    })
  }

  handleError(message) {
    console.log(message)
    // this.setState({ message })
    // setTimeout(() => {
    //   this.setState({ message: null })
    // }, 3000)
  }

  render() {
    return (
      <div id='app'>
        <Nav changeMenuState={this.changeMenuState} time={this.state.time} user={this.state.user} logout={this.logout} />
        <EMPRouter
          token={this.state.token}
          changeMenuState={this.changeMenuState}
          showMenu={this.state.showMenu}
          time={this.state.currentTime}
          user={this.state.user}
          login={this.login}
        />
      </div>

    )
  }
}

export default App
