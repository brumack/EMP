import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Dashboard from './Dashboard'
import Login from './Login'
import CreateUser from './CreateUser'

const EMPRouter = props => {
  return (
    <BrowserRouter >
      <Route
        exact
        path='/'
        render={() => {
          if (props.token) {
            return <Redirect to={{ pathname: '/dashboard' }} />
          }
          return <Redirect to={{ pathname: '/login' }} />
        }}
      />

      <Route
        path='/dashboard'
        render={() => {
          if (props.token) {
            return <Dashboard
              showMenu={props.showMenu}
              changeMenuState={props.changeMenuState}
              time={props.time}
              user={props.user}
            />
          }
          return <Redirect to={{ pathname: '/login' }} />
        }}
      />

      <Route
        path='/login'
        render={() => {
          if (props.token) {
            return <Redirect to={{ pathname: '/dashboard' }} />
          }
          return <Login login={props.login} />
        }}
      />
    </BrowserRouter>
  )
}

export default EMPRouter
