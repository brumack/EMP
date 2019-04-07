import React from 'react'
import { Container, Grid, Button, Form, Select } from 'semantic-ui-react'

class CreateUser extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    const update = {}
    update[e.target.name] = e.target.value
    this.setState(update)
  }

  submit = async (e) => {
    const values = this.state
    this.props.login(values)
  }


  render() {
    const { email, password } = this.state
    return (
      <Container style={{ marginTop: '100px' }}>
        <Grid>
          <Grid.Row columns={1} centered>
            <Grid.Column width={6}>
              <Form>
                <Form.Field required>
                  <label>Email Address</label>
                  <input name='email' type='text' placeholder='Email Address' value={email} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input name='password' type='password' value={password} onChange={this.handleChange} />
                </Form.Field>
                <Button size='mini' content="Submit" onClick={this.submit} />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default CreateUser