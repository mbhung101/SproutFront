import React, {Component} from 'react'
import { Button, Row, Col, Navbar, NavItem } from 'react-materialize';


class UserInfo extends Component {

  constructor(props){
    super(props)
    this.state = props.user
    this.render = this.render.bind(this)
    this.editProfHandler = this.editProfHandler.bind(this)
  }

  editProfHandler (e){
    window.location = ('/home/edit')
  }

render (){
  return (
    <div className="row">
      <div className="col s4">
        <img src="https://cdn0.iconfinder.com/data/icons/financial-business/512/agriculture_project-512.png" style={{width:300, height:300}}/>
      </div>
      <div className = "col s3">
        <h5>First Name: </h5> {this.state.FName} <br></br>
        <h5> Last Name: </h5> {this.state.LName}
        <h5> Age: </h5> {this.state.Age}
        <h5> State: </h5> {this.state.State}
        <h5> City: </h5> {this.state.City}
      </div>
      <div className = "col s5">
        <h5> About me </h5>
        <hr/>
        {this.props.user.Bio}
        <br></br>
        <Button onClick = {this.editProfHandler} className="light-green">Redefine Yourself</Button>
      </div>
    </div>
    )
  }
}

export default UserInfo