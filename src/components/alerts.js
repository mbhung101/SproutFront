import React, {Component} from 'react'
import { Button, Row, Col, Navbar, NavItem } from 'react-materialize';


class Alerts extends Component {

  constructor(props){
    super(props)
    this.render = this.render.bind(this)
    this.alertDisplay = this.alertDisplay.bind(this)
  }

  changeAlerts(alerts){
    return alerts.map(function(alert){
       if (alert.priority === "High"){
         alert.priority = "red lighten-1"
         return alert
       }
       else if (alert.priority === "Medium"){
         alert.priority = "yellow"
         return alert
       }
       else if (alert.priority === "Low"){
         alert.priority = "light-blue lighten-1"
         return alert
       }
     })
   }


  alertDisplay (){
    var newAlerts = this.changeAlerts(this.props.alerts)
    return this.props.alerts.map((alert)=>
    <div> <h5> <span className = {alert.priority}> {alert.date+ " " + alert.message} </span> </h5> <br></br> </div>
    )
  }

  render (){
    return (
      <div>
        {this.alertDisplay()}
        <Button onClick={this.props.handleClick} className="light-green">Add an Alert</Button>
      </div>
    )
  }
}


export default Alerts
