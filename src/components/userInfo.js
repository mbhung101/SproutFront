import React, {Component} from 'react'
import { Button} from 'react-materialize';


class UserInfo extends Component {

  constructor(props){
    super(props)
    this.render = this.render.bind(this)
    this.editProfHandler = this.editProfHandler.bind(this)
  }

  editProfHandler (e){
    window.location = ('/home/edit')
  }

render (){
  const hpStyle = {
    paddingLeft: 20,
    paddingRight: 20
  }
  const hpImg = {
    paddingLeft: 20,
    height: 300,
    width: 400
  }
  return (
    <div style={{paddingRight:20}} className="row">
      <div className="col s4">
        <img  src={this.props.user.profilepic} style={hpImg}/>
      </div>
      <div style={{paddingLeft:70}} className = "col s3">
        <h5>First Name: </h5> {this.props.user.fname} <br></br>
        <h5> Last Name: </h5> {this.props.user.lname}
        <h5> Age: </h5> {this.props.user.age}
        <h5> State: </h5> {this.props.user.state}
        <h5> City: </h5> {this.props.user.city}
      </div>
      <div className = "col s5">
        <h5> About me </h5>
        <hr/>
        {this.props.user.bio}
        <br></br>
        <Button onClick = {this.editProfHandler} className="purple">Redefine Yourself</Button>
      </div>
    </div>
    )
  }
}

export default UserInfo
