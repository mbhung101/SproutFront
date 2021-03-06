import React, { Component } from  'react'
import { Button, Form, Input, Navbar } from 'react-materialize';


export default class GardenChooser extends Component {
  constructor(props) {
    super(props)
    this.state ={
      year: "",
      name: "",
      user_id: localStorage.user_id
    }
    this.gardenLister = this.gardenLister.bind(this)
    this.render = this.render.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  gardenLister(gardens){
    return gardens.map((garden)=>{
      return <option value={garden.id}>{garden.name + "-" + garden.year}</option>
    }
    )
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div className = "container">
        <Navbar style={{paddingLeft:20}} brand="Choose a Garden" className="light-green">
        </Navbar>
        <div className = 'row'>
        <div className = "col s6">
        <form  style={{padding:10}} onSubmit = {this.props.gardenChoice}>
          <Input type='select' defaultValue='1'>
          {this.gardenLister(this.props.gardens)}
          </Input> <br></br>
          <button className="btn waves-effect waves-light purple" type="submit" name="action">Choose Garden</button>
          </form>
        </div>
        </div>
        <Navbar  style={{paddingLeft:20}} brand="Create a New Garden" className="light-green">
        </Navbar>
        <form  style={{padding:20}} onSubmit={this.props.onNewGardenSubmit}>
          <input type="number" name="year" placeholder="Year" value={this.state.date} onChange={this.handleChange} /><br/>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br/>
          <button className="btn waves-effect waves-light purple" type="submit" name="action">Create Garden </button>
        </form>
      </div>
    )
  }
}
