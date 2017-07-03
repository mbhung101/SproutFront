import React, { Component } from 'react'
import { Button, Row, Col, Navbar, NavItem } from 'react-materialize';


class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      fname: '',
      lname: '',
      age: 0,
      city: '',
      state: '',
      bio: '',
      username: '',
      password: '',
      profilepic: '',
      logusername: '',
      logpassword: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit(e){
    e.preventDefault()
    var user = {
      username: e.target.children[0].value,
      password: e.target.children[2].value
    }
    this.props.onLoginSubmit(user)
  }

  handleSignUpSubmit(e){
    e.preventDefault()
    debugger
    this.props.onLoginSubmit( this.state )
  }

  render(){
    return (
    <div>
    <div className = "row">
      <div className = "col s3">
        <h4> Sign Up </h4>
          <form onSubmit={this.handleSignUpSubmit}>
            <input type="text" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} /><br/>
            <input type="text" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} /><br/>
            <input type="number" name="age" placeholder="Age" value={this.state.date} onChange={this.handleChange} /><br/>
            <input type="textarea" name="bio" placeholder="Bio" value={this.state.bio} onChange={this.handleChange} /><br/>
            <input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} /><br/>
            <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} /><br/>
            <input type="text" name="profilepic" placeholder="Profile Pic Link" value={this.state.profilepic} onChange={this.handleChange} /><br/>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} /><br/>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} /><br/>
            <button className="btn waves-effect waves-light light-green" type="submit" name="action">Sign Up</button>
          </form>
        </div>
        <div className= "col s4 offset-s4">
        <h4> Login </h4>
        <form onSubmit={this.handleLoginSubmit}>
          <input type="text" name="logusername" placeholder="username" value={this.state.logname} onChange={this.handleChange} /><br/>
          <input type="password" name="logpassword" placeholder="password" value={this.state.logpass} onChange={this.handleChange}/><br/>
          <button className="btn waves-effect waves-light light-green" type="submit" name="action">Log In</button>
        </form>
        </div>
      </div>
      </div>
    )
  }
}

export default LoginForm
