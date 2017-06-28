import React, {Component} from 'react'
import { Button, Row, Col, Navbar, NavItem, Card } from 'react-materialize';

class Patches extends Component {

  constructor(props){
    super(props)
    this.render = this.render.bind(this)
    this.gardenDisplay = this.gardenDisplay.bind(this)
  }

  gardenDisplay (){
    return this.props.patches.map((patch)=>
    <Card>
      <div className= "row">
        <div className= "col s6" >
          <center><img style={{width: 250, height: 250}} src={patch.imgs}/></center>
        </div>
        <div className= "col s6">
          <center> <h5> {patch.type} </h5></center>
          <hr/>
            <p> Number of Plants: {patch.number}</p>
            <p> Date planted: {patch.start}</p>
            <p> Yields so far: {patch.yields}</p>
            <p> Watering schedule: {patch.water} </p>
            <p> Fertizler used: {patch.fertilizer} </p>
            <p> Notes: {patch.notes} </p>
        </div>
      </div>
    </Card>
    )
  }

  render (){
    return (
      <div>
        <Navbar brand="My Garden"  className="light-green" right>
        </Navbar>
        <br></br>
        <center> <a href="https://imgflip.com/i/1rjb9m"><img src="https://i.imgflip.com/1rjb9m.jpg" title="made at imgflip.com"/></a></center>
      </div>
    )
  }
}


export default Patches
