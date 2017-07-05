import React, { Component } from  'react'
import { Button, Form, Input } from 'react-materialize';


export default class GardenChooser extends Component {
  constructor(props) {
    super(props)
  }

// RENDER DROPDOWN AND NEW GARDEN FORM

  render() {
    return(
      <div>
        <Input type='select' defaultValue='1' label="Choose Garden">
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </Input> <br></br>
      </div>
    )
  }
}
