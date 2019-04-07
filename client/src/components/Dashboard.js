import React from 'react'
import { Header, Image, Menu, Segment, Sidebar, Grid, Container, Icon } from 'semantic-ui-react'
import './Dashboard.css'

import Messages from './Messages'
import Employees from './Employees'
import Jobs from './Jobs'
import Timecard from './Timecard'
import Schedule from './Schedule'
import Requests from './Requests'
import CreateUser from './CreateUser'
import DashSidebar from './DashSidebar'

class Dashboard extends React.Component {

  state = {
    view: null
  }

  componentDidMount() {
    this.setState({ showMenu: this.props.showMenu })
  }

  componentWillReceiveProps = props => {
    const { showMenu } = props
    if (showMenu != this.state.showMenu) {
      this.setState({ showMenu })
    }
  }

  handleDisplayChange = name => {
    this.setState({ view: name })
    this.props.changeMenuState()
  }

  renderView = () => {
    switch (this.state.view) {
      case 'messages':
        return <Messages />
      case 'employees':
        return <Employees />
      case 'jobs':
        return <Jobs />
      case 'timecard':
        return <Timecard />
      case 'schedule':
        return <Schedule />
      case 'requests':
        return <Requests />
      case 'createUser':
        return <CreateUser />
      default:
        return <Messages />
    }
  }

  render() {
    return (
      <div id='Dashboard'>
        <Sidebar.Pushable as={Segment}>
          <Sidebar id='Sidebar' as={Menu} animation='push' icon='labeled' inverted vertical visible={this.props.showMenu} width='wide'>
            <Menu.Item id='Date' name={new Date().toDateString()} />
            <Image src={'./userAvatars/' + this.props.user.avatar} size='small' circular />
            <Header as='h1'>{this.props.user.firstName}<br />{this.props.user.lastName}</Header>
            <DashSidebar display={this.state.display} handleDisplayChange={this.handleDisplayChange} user={this.props.user} />
          </Sidebar>
          <Sidebar.Pusher dimmed={this.props.showMenu}>
            <Container fluid>
              {this.renderView()}
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div >
    )
  }
}

export default Dashboard
