import React, { Component } from 'react'
import LoginForm from './loginForm'
import {  Navbar } from 'react-materialize';


class UserForm extends Component {

  render(){
    return (
      <div>
      <div>
        <Navbar brand= "Login/Sign Up" className="light-green" href='/home'>
        </Navbar>
      </div>
        {(localStorage.user_id) ? <button onClick= {this.props.handleLogOut} className="btn waves-effect waves-light light-green" >Logout</button> : <LoginForm onLoginSubmit={this.props.onLoginSubmit} onSignUpSubmit={this.props.onSignUpSubmit}/>}
      </div>

    )
  }
}

export default UserForm
