import React, {Component} from 'react'
import { Button, Row, Col, Navbar, NavItem, Card } from 'react-materialize';

class Stats extends Component {

  constructor(props){
    super(props)
    this.render = this.render.bind(this)
    this.gardenDisplay = this.gardenDisplay.bind(this)
  }

  gardenDisplay (){
    return this.props.patches.map((patch)=>
    <div> <h5> {patch.type} </h5></div>
    )
  }

  render (){
    return (
      <div>
        <Navbar brand="Garden Stats"  className="light-green" right>
        </Navbar>
        <br></br>
        <center> <a href="https://imgflip.com/i/1rlvrj"><img src="https://i.imgflip.com/1rlvrj.jpg" title="made at imgflip.com"/></a>  </center>
      </div>
    )
  }
}


export default Stats
