import React, { Component } from 'react'
import { Menu, Icon, Header, Image } from 'semantic-ui-react'

import './Nav.css'

export default class Nav extends Component {

  state = {
    showMenu: true,
    currentTime: this.props.currentTime
  }

  componentWillReceiveProps = props => {
    const { currentTime, user } = props
    if (currentTime != this.state.currentTime) {
      this.setState({ currentTime })
    }
    if (user != this.state.user) {
      this.setState({ user })
    }
  }

  renderGreeting() {
    if (this.props.user.firstName) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item>
            <Image src={'./userAvatars/' + this.props.user.avatar} avatar />
            {'Hi ' + this.props.user.firstName + '!'}
          </Menu.Item>
          <Menu.Item
            name='log out'
            onClick={this.props.logout}
          >
            <Icon name='log out' size='large' />
          </Menu.Item>
        </Menu.Menu>
      )
    } else return null
  }


  render() {
    return (
      <Menu inverted id='Nav'>
        <Menu.Item onClick={this.props.changeMenuState}>
          <div className='menuIcon'>
            <div className='bar' />
            <div className='bar' />
            <div className='bar' />
          </div>
        </Menu.Item>
        <Menu.Item id='Date'
          name={new Date().toDateString()}
        />
        {this.renderGreeting()}
      </Menu>
    )
  }
}
