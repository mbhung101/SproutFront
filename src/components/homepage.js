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
      alerts: [{message:"Slugs sighted near my begonias!",priority:"High",date:"1/2/1234"},
               {message:"I pooped my pants again",priority:"Medium",date:"1/2/1234"},
               {message:"Nothing brings me joy anymore",priority:"Low",date:"1/2/1234"}],
      newAlertForm: false
    }
    this.render = this.render.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleAlertSubmit = this.handleAlertSubmit.bind(this)
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
      priority: event.target[3].value
    }
    this.setState((previousState) => {
      return {
        alerts: [...previousState.alerts, newAlert]
      }
  })
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
            <Alerts alerts={this.state.alerts} handleClick={this.handleClick}/>
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

// <div className="col s7 center-align">
//   <h4> My Layout </h4>
// </div>
//               <a href="https://imgflip.com/i/1rjb9m"><img src="https://i.imgflip.com/1rjb9m.jpg"/></a>




export default Homepage
