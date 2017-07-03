import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Homepage from '../components/homepage'
import Patches from '../components/patches'
import PastPatches from '../components/pastPatches'
import Stats from '../components/stats'
import UserForm from '../components/userForm'
import NavBar from '../components/navbar'
import SproutAdapter from '../adapters'
import EditProf from '../components/editProf'



class GardenContainer extends Component {

  constructor(){
    super()
    this.state = {
      user: {}
    }
    this.render = this.render.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this)
    this.onProfileEditSubmit = this.onProfileEditSubmit.bind(this)
    const currentUser = localStorage.user_id

  }

  onLoginSubmit(user){
     SproutAdapter.currentUser(user)
    .then(user => {
      if (!user.error) {
        localStorage.setItem("user_id",user.id)
      }
    })
  }

  onSignUpSubmit(profile){
    SproutAdapter.createUser(profile)
    .then(user => {
      if (!user.error) {
        localStorage.setItem("user_id",user.id)
      }
    })
  }

  onProfileEditSubmit (profile){
    SproutAdapter.editUser (profile,localStorage.user_id)
    .then(user => {
      this.setState({
        user:user
      })
    })
    window.location = ('/home')
  }


  handleLogOut(){
    localStorage.clear()
    window.location = ('/logon')
  }

  render (){
    if (localStorage.user_id){
    return (
      <BrowserRouter>
        <div className = "container">
        <NavBar/>
        <Route exact path = '/home' render= {() =><Homepage onProfileEditSubmit={this.ß}/>}/>
        <Route exact path = '/home/edit' render= {() =><EditProf user={this.state.user} onProfileEditSubmit={this.onProfileEditSubmit}/>}/>
        <Route exact path = '/gardens/current' render= {() =><Patches patches={this.state.patches}/>}/>
        <Route exact path = '/gardens/history' render= {() =><PastPatches patches={this.state.patches}/>}/>
        <Route exact path = '/login' render= {() =><UserForm onSignUpSubmit={this.onSignUpSubmit} onLoginSubmit={this.onLoginSubmit} handleLogOut={this.handleLogOut}/>}/>
        <Route exact path = '/stats' render= {() =><Stats/>}/>
        </div>
      </BrowserRouter>
    )
  }else{
    return (
      <div>
      <NavBar/>
      <UserForm handleLogOut={this.handleLogOut} onLoginSubmit={this.onLoginSubmit} onSignUpSubmit={this.onSignUpSubmit}/>
      </div>
    )
  }
}
}


export default GardenContainer
