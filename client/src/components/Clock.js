import React from 'react'
import { Menu, Header, Button } from 'semantic-ui-react'

class Clock extends React.Component {

  state = {
    time: new Date(),
    in: false
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }

  handleClockToggle = () => {
    this.setState({ in: !this.state.in })
  }

  render() {
    const status = this.state.in ? 'out' : 'in'
    return (
      <Menu.Item>
        <div id='Clock' className={status + ' card'} onClick={this.handleClockToggle}>
          <Header as='h1'>{this.state.time.toTimeString().substring(0, 8)}</Header>
        </div>
      </Menu.Item>
    )
  }
}

export default Clock
