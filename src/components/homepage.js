import React, { Component } from 'react'
import Alerts from './alerts'
import Patches from './patches'
import UserInfo from './userInfo'
import SproutAdapter from '../adapters/index'
import AlertAdapter from '../adapters/alertAdapter'
import AlertForm from './alertForm'
import { Button, Row, Col, Navbar, NavItem } from 'react-materialize';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';





class Homepage extends Component {

  constructor(props){
    super(props)
    this.state = {
      auth:{
        isLoggedIn: false,
        user:{},
        alerts: []
      }
    }
    this.render = this.render.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleAlertSubmit = this.handleAlertSubmit.bind(this)
    this.deleteAlert = this.deleteAlert.bind(this)
  }

  componentDidMount(){
    if (localStorage.user_id) {
      SproutAdapter.getUser(localStorage.user_id)
        .then(user => {
          if (!user.error) {
            this.setState({
              auth: {
                isLoggedIn: true,
                user: user
              }
            })
          }
        })
    }
  }


  handleClick (){
    this.setState({
      newAlertForm: true
    })
  }

  handleAlertSubmit(event) {
    event.preventDefault()
    var newAlert = {
      date: event.target.children[0].value,
      message:event.target.children[2].value,
      priority: event.target[3].value,
      user_id: localStorage.user_id
    }
    AlertAdapter.createAlert(newAlert)
      .then(alerts => this.setState({
          alerts: alerts
      })
    )
}

  deleteAlert (e){
      e.preventDefault()
      AlertAdapter.deleteAlert(e.target.parentElement.id,localStorage.user_id)
      .then(alerts => this.setState({
          alerts: alerts
      })
    )
  }

  render (){
    return (
      <div className= "container">
        <div>
          <Navbar brand={this.state.auth.user.username} className="light-green" href='/home'>
          </Navbar>
        </div>
        <br></br>
        <UserInfo user={this.state.auth.user} />
        <br></br>
        <div>
          <Navbar brand="Alerts"  className="light-green" right>
          </Navbar>
        </div>
        <div className = "row">
          <div className="col s6">
            <Alerts handleClick={this.handleClick} alerts={this.state.alerts} deleteAlert={this.deleteAlert}/>
          </div>
          <br></br>
          <div className="col s6">
            {this.state.newAlertForm? <AlertForm handleAlertSubmit={this.handleAlertSubmit}/> : null}
          </div>
        </div>
        <br></br>
        <Navbar brand="Weather"  className="light-green" right>
        </Navbar>
        <br></br>
        <center> <a href="https://imgflip.com/i/1rluiw"><img src="https://i.imgflip.com/1rluiw.jpg" title="made at imgflip.com"/></a></center>
      </div>
    )
  }
}



export default Homepage
