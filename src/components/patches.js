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
    <div> <h5> {patch.type} </h5></div>
    )
  }

  render (){
    return (
      <div>
        <div>
        <Navbar brand="My Garden"  className="light-green" right>
        </Navbar>
        <div className= "row">

        <div className="col s6">
        <Card>
          <div className= "row">
            <div className= "col s6" >
              <center><img style={{width: 250, height: 250}} src="https://www.cayennediane.com/wp-content/uploads/Ghost-Pepper-Plant-02.jpg"/></center>
            </div>
            <div className= "col s6">
              <center> <h5> Ghost Peppers </h5></center>
              <hr/>

              <p> Number of Plants: 20</p>
              <p> Date planted: 3/12/2017</p>
              <p> Yields so far: [89g,29g,293g]</p>
              <p> Watering schedule: Every 2 days </p>
              <p> Fertizler used: The ashes of my dead family </p>
              <p> Notes: Eating these makes me feel alive! If only for a few moments... </p>
            </div>
          </div>
        </Card>
        </div>

        <div className = "col s6">
        <Card>
          <div className= "row">
            <div className= "col s6" >
              <center><img style={{width: 250, height: 250}} src="https://www.cayennediane.com/wp-content/uploads/Ghost-Pepper-Plant-02.jpg"/></center>
            </div>
            <div className= "col s6">
              <center> <h5> Ghost Peppers </h5></center>
              <hr/>

              <p> Number of Plants: 20</p>
              <p> Date planted: 3/12/2017</p>
              <p> Yields so far: [192g,299g,231g]</p>
              <p> Watering schedule: Every day </p>
              <p> Fertizler used: The ground up bones of my family </p>
              <p> Notes: They're spicy, like my ex-wife's lover Raul! </p>
            </div>
          </div>
        </Card>
        </div>


        </div>
        </div>
      </div>
    )
  }
}


export default Patches
