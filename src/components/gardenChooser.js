import React, { Component } from  'react'
import { Button, Form, Input, Navbar } from 'react-materialize';


export default class GardenChooser extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount (){
  //   GardenAdapter.getGardens(localStorage.user_id)
  // }

// RENDER DROPDOWN AND NEW GARDEN FORM


  render() {
    return(
      <div>
      <Navbar brand="Choose Garden" className="light-green">
      </Navbar>
      <div className = 'row'>
      <div className = "col s6">
      <form onSubmit = {this.props.gardenChoice}>
        <Input type='select' defaultValue='1'>
        </Input> <br></br>
        <button className="btn waves-effect waves-light light-green" type="submit" name="action">Choose Garden</button>
        </form>
      </div>
      </div>
      </div>
    )
  }
}
