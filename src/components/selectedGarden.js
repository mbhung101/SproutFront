import React, {Component} from 'react'
import PatchAdapter from '../adapters/patchAdapter'
import { Button, Row, Col, Navbar, NavItem, Card, Slide,Slider } from 'react-materialize';

export default class SelectedGarden extends Component {

  constructor(props){
    super(props)
    this.state={
      patches: [],
      plant: "",
      number: 0,
      fertilizer: "",
      spacing: 0,
      planted_on: "",
      water: "",
      sunlight: "",
      substrate: "",
      seed_depth: "",
      notes: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
    }
    this.gardenDisplay = this.gardenDisplay.bind(this)
    this.imageMapper = this.imageMapper.bind(this)
    this.render = this.render.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.newPatchSubmit = this.newPatchSubmit.bind(this)
  }

  componentWillMount(){
    PatchAdapter.getGardenPatches(this.props.gardens,localStorage.user_id)
      .then( patches =>
        this.setState({
        patches: patches
      })
        )
      }


    imageMapper(imgs){
      return imgs.map((img)=>
      <Slide
        src={img.url}>
      </Slide>
      )
    }


  gardenDisplay (){
    return this.state.patches.map((patch)=>
    <div key={patch.id}>
    <Card>
      <div className= "row">
        <div className= "col s6" >
        <Slider>
        {this.imageMapper(patch.images)}
        </Slider>
        </div>

        <div className= "col s3">
          <center> <h5> {patch.plant} </h5></center>
          <hr/>
            <p> Date planted: {patch.planted_on}</p>
            <p> Garden: {patch.garden}</p>
            <p> Number of Plants: {patch.number}</p>
            <p> Total Yield(g): {patch.total_yield}</p>
            <p> Sunlight: {patch.sunlight} </p>
            <p> Substrate: {patch.substrate} </p>
            <p> Spacing (in): {patch.spacing} </p>
            <p> Seed depth(in): {patch.seed_depth} </p>
            <p> Watering schedule: {patch.water} </p>
            <p> Fertizler used: {patch.fertilizer} </p>
            <p> Notes: {patch.notes} </p>
          </div>
          <div className = "col s2">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button className="btn waves-effect waves-light orange" >Harvest </button> <br></br> <br></br>
            <button className="btn waves-effect waves-light light-green"> Edit</button> <br></br> <br></br>
            <button className="btn waves-effect waves-light red"> Delete</button>
          </div>
      </div>
    </Card>
    </div>
    )
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  newPatchSubmit(event){
    event.preventDefault()
    var newPatch = {
    plant: event.target.plant.value,
    number: event.target.number.value,
    fertilizer: event.target.fertilizer.value,
    spacing: event.target.spacing.value,
    planted_on: event.target.planted_on.value,
    water: event.target.water.value,
    sunlight: event.target.sunlight.value,
    substrate: event.target.substrate.value,
    seed_depth: event.target.seed_depth.value,
    notes: event.target.notes.value,
    user_id: localStorage.user_id,
    garden_id: this.props.gardens,
    image1: event.target.image1.value,
    image2: event.target.image2.value,
    image3: event.target.image3.value,
    image4: event.target.image4.value,
    image5: event.target.image5.value
    }
    PatchAdapter.createPatch(newPatch)
    .then( patches =>
      this.setState({
      patches: patches,
      plant: "",
      number: 0,
      fertilizer: "",
      spacing: 0,
      planted_on: "",
      water: "",
      sunlight: "",
      substrate: "",
      seed_depth: "",
      notes: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: ""
    })
      )
    }

  render (){
    if (this.state.patches.length > 0){
    return (
      <div>
      <Navbar brand= "Add a Patch" className="light-green" right>
      </Navbar>
      <div className="row">
      <form onSubmit={this.newPatchSubmit}>
      <div className = "col s4">
        <h4> Plant Info </h4>
        <input type="text" name="plant" placeholder="Plant Type" value={this.state.plant} onChange={this.handleChange} /><br/>
        Number of Plants: <input type="number" name="number" placeholder="Number of Plants" value={this.state.number} onChange={this.handleChange} /><br/>
        <input type="text" name="fertilizer" placeholder="Fertizler Used" value={this.state.fertilizer} onChange={this.handleChange} /><br/>
        Plants Spacing(in): <input type="number" name="spacing" placeholder="Spacing(in)" value={this.state.spacing} onChange={this.handleChange} /><br/>
        <input type="text" name="planted_on" placeholder="Planted On" value={this.state.planted_on} onChange={this.handleChange} /><br/>
        <input type="text" name="water" placeholder="Watering Schedule" value={this.state.water} onChange={this.handleChange} /><br/>
        <input type="text" name="sunlight" placeholder="Sunlight Received" value={this.state.sunlight} onChange={this.handleChange} /><br/>
        <input type="text" name="substrate" placeholder="Substrate" value={this.state.substrate} onChange={this.handleChange} /><br/>
        Seed Depth(in): <input type="number" name="seed_depth" placeholder="Seed Depth(in)" value={this.state.seed_depth} onChange={this.handleChange} /><br/>
        <input type="textarea" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleChange} /><br/>
        <button className="btn waves-effect waves-light light-green" type="submit" name="action">Create Patch</button>
      </div>
      <div className = "col s4">
        <h4> Images </h4>
        <input type="text" name="image1" placeholder="Image URL" value={this.state.image1} onChange={this.handleChange} /><br/>
        <input type="text" name="image2" placeholder="Image URL" value={this.state.image2} onChange={this.handleChange} /><br/>
        <input type="text" name="image3" placeholder="Image URL" value={this.state.image3} onChange={this.handleChange} /><br/>
        <input type="text" name="image4" placeholder="Image URL" value={this.state.image4} onChange={this.handleChange} /><br/>
        <input type="text" name="image5" placeholder="Image URL" value={this.state.image5} onChange={this.handleChange} /><br/>
      </div>
      </form>
      </div>
      <br></br>
      <Navbar brand= "My Garden" className="light-green" right>
      </Navbar>
      {this.gardenDisplay()}
      </div>
    )
  } else{
    return (
      <div>
      No Patches to display <br></br>
      </div>
    )
  }
  }
}
