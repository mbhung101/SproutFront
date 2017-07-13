import React, {Component} from 'react'
import AlertAdapter from '../adapters/alertAdapter'
import { Button} from 'react-materialize';


class Alerts extends Component {

  constructor(props){
    super(props)
    this.state = {
      alerts: []
    }
    this.render = this.render.bind(this)
    this.alertDisplay = this.alertDisplay.bind(this)
  }

  componentWillReceiveProps(){
      AlertAdapter.getAlerts(localStorage.user_id)
        .then(alerts => {
          if (!alerts.error) {
            this.setState({
              alerts: alerts
            })
          }
        })
      }



  changeAlerts(alerts){
    if (alerts.length!==0){
    return alerts.map(function(alert){
       if (alert.priority === "High"){
         alert.priority = "red"
         return alert
       }
       else if (alert.priority === "Medium"){
         alert.priority = "yellow"
         return alert
       }
       else if (alert.priority === "Low"){
         alert.priority = "blue"
         return alert
       }
     })
   }
     return null
   }


  alertDisplay (){
    var newAlerts = this.changeAlerts(this.state.alerts)
    if (this.state.alerts[0]) {
      console.log(this.state.alerts[0].id)
    }
    return this.state.alerts.map((alert)=>
      <div key={alert.id}   className="row"> <div className = "col s10"><h5> <div id={alert.priority}> {alert.date+ " " + alert.message} </div> </h5></div>
      <div style={{paddingTop:25}}>
      <Button id={alert.id} onClick={this.props.deleteAlert} floating className='red' waves='light' icon='delete' />
      </div>
      <br></br>
      </div>
    )
  }

  render (){
    return (
        <div>
          {this.alertDisplay()}
          <Button onClick={this.props.handleClick} className="purple">Add an Alert</Button>
        </div>
    )
  }
}


export default Alerts
