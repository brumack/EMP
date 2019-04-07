import React from 'react'
import { Component, Redirect } from 'react'
import { withRouter } from 'react-router-dom'
import { Segment, Container, Grid, Button, Form } from 'semantic-ui-react'
import local from '../api/local'

class CreateUser extends Component {
  state = {
    email: '',
    password: '',
    type: 'Employee',
    firstName: '',
    lastName: '',
    verifyPassword: '',
    file: null,
    redirect: false
  }

  redirectToTarget = () => {
    this.context.router.history.push(`/Dashboard`)
  }

  handleChange = (e) => {
    const update = {}
    update[e.target.name] = e.target.value
    this.setState(update)
  }

  handleFile = e => {
    this.setState({ file: e.target.files[0] })
  }

  submit = async e => {
    e.preventDefault()
    const { email, password, verifyPassword, type, firstName, lastName, file } = this.state

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('verifyPassword', verifyPassword)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('type', type)
    formData.append('timestamp', Date.now())
    formData.append('file', file)

    const response = await local.post(`/user/new`, formData)
    console.log(response.data)

    if (response.data.success) {
      this.props.history.push('/Dashboard');

    } else {
      this.setState({
        email: '',
        password: '',
        type: 'employee',
        firstName: '',
        lastName: '',
        avatar: '',
        verifyPassword: ''
      })
    }
  }

  userOptions = [
    { key: 's', text: 'Super', value: 'Super' },
    { key: 'a', text: 'Admin', value: 'Admin' },
    { key: 'e', text: 'Employee', value: 'Employee' }
  ]

  render() {
    const { email, password, type, firstName, lastName, avatar, verifyPassword } = this.state

    return (

      <Container style={{ marginTop: '100px' }}>
        <Grid>
          <Grid.Row columns={1} centered>
            <Grid.Column width={6}>
              <Segment inverted>
                <Form inverted encType='multipart/form-data'>
                  <Form.Field required>
                    <label>First Name</label>
                    <input name='firstName' type='text' placeholder='First Name' value={firstName} onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field required>
                    <label>Last Name</label>
                    <input name='lastName' type='text' placeholder='Last Name' value={lastName} onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field required>
                    <label>Email Address</label>
                    <input name='email' type='text' placeholder='Email Address' value={email} onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Select
                    required
                    value={type}
                    options={this.userOptions}
                    label='User Type'
                    placeholder='User Type'
                    onChange={(e, { value }) => this.setState({ type: value })}
                  />
                  <Form.Field required>
                    <label>Avatar</label>
                    <input name='avatar' type='file' onChange={this.handleFile} />
                  </Form.Field>
                  <Form.Field required>
                    <label>Password</label>
                    <input name='password' type='password' value={password} onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field required>
                    <label>Verify Password</label>
                    <input name='verifyPassword' type='password' value={verifyPassword} onChange={this.handleChange} />
                  </Form.Field>
                  <Button size='mini' content="Submit" onClick={this.submit} />
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container >
    )
  }
}

export default withRouter(CreateUser)