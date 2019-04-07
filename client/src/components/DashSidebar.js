import React from 'react'
import { Header, Menu, Icon } from 'semantic-ui-react'
import menuOptions from '../lib/menuOptions'


class DashSidebar extends React.Component {

  renderOptions = () => {
    switch (this.props.user.type) {
      case 'Employee':
        return menuOptions.map(option => {
          if (option.permissionLevel.indexOf('Employee') != -1) {
            return (
              <Menu.Item as='a' onClick={() => this.props.handleDisplayChange(option.name)}>
                <Icon name={option.icon} />
                {option.name}
              </Menu.Item>
            )
          }
        })
      case 'Admin':
        return menuOptions.map(option => {
          if (option.permissionLevel.indexOf('Admin') != -1) {
            return (
              <Menu.Item as='a' onClick={() => this.props.handleDisplayChange(option.name)}>
                <Icon name={option.icon} />
                {option.name}
              </Menu.Item>
            )
          }
        })
      case 'Super':
        return menuOptions.map(option => {
          if (option.permissionLevel.indexOf('Super') != -1) {
            return (
              <Menu.Item as='a' onClick={() => this.props.handleDisplayChange(option.name)}>
                <Icon name={option.icon} />
                {option.name}
              </Menu.Item>
            )
          }
        })
      default: return null
    }
  }


  render() {
    return (
      <React.Fragment>
        <Header as='h3'>{this.props.user.type}</Header>
        {this.renderOptions()}
      </React.Fragment>
    )
  }
}

export default DashSidebar
