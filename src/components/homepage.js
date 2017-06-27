import React, { Component } from 'react'
import Alerts from './alerts'
import Patches from './patches'
import UserInfo from './userInfo'
import AlertForm from './alertForm'
import { Button, Row, Col, Navbar, NavItem } from 'react-materialize';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';





class Homepage extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: props.user,
      alerts:props.alerts,
      newAlertForm: false
    }
    this.render = this.render.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (){
    this.setState({
      newAlertForm: true
    })
  }

  handleAlertSubmit(event) {

  }



  render (){
    return (
      <div className= "container">
        <div>
          <Navbar brand={this.state.user.username} className="light-green" href='/home'>
          </Navbar>
        </div>
          <br></br>
          <UserInfo user={this.state.user} />
          <br></br>
          <div>
          <Navbar brand="Alerts"  className="light-green" right>
          </Navbar>
          </div>
        <div className = "row">
          <div className="col s6">
            <Alerts alerts={this.state.alerts} handleClick={this.handleClick} handleAlertSubmit={this.handleAlertSubmit}/>
          </div>
          <br></br>
          <div className="col s6">
            {this.state.newAlertForm? <AlertForm/> : null}
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

// <div className="col s7 center-align">
//   <h4> My Layout </h4>
// </div>
//               <a href="https://imgflip.com/i/1rjb9m"><img src="https://i.imgflip.com/1rjb9m.jpg"/></a>




export default Homepage
