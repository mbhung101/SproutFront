import React, {Component} from 'react'
import PatchAdapter from '../adapters/patchAdapter'
import { Button, Row, Col, Navbar, NavItem, Card, Slide,Slider } from 'react-materialize';

export default class SelectedGarden extends Component {

  constructor(props){
    super(props)
    this.state={
      patches: null,
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
      renderForm: 0,
      harvestForm: 0,
      harvested_on: "",
      yield: 0
    }
    this.gardenDisplay = this.gardenDisplay.bind(this)
    this.imageMapper = this.imageMapper.bind(this)
    this.render = this.render.bind(this)
    this.harvestForm = this.harvestForm.bind(this)
    this.onHarvestClick = this.onHarvestClick.bind(this)
    this.onHarvestSubmit = this.onHarvestSubmit.bind(this)
    this.onEditClick = this.onEditClick.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.newPatchSubmit = this.newPatchSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.editPatchSubmit = this.editPatchSubmit.bind(this)
    this.yielder = this.yielder.bind(this)
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
      if (imgs.length > 0){
      return imgs.map((img)=>
      <Slide
        src={img.url}>
      </Slide>
      )
    }else{
      return 	<Slide
		src="http://lorempixel.com/580/250/nature/1"
		title="No pictures!">
	   </Slide>
    }
    }

    onHarvestClick(e){
      this.setState({
        harvestForm: parseInt(e.target.parentElement.id)
      })
    }

    onEditClick(e){
      this.setState({
        renderForm: parseInt(e.target.parentElement.id)
      })
    }

    onDeleteClick(e){
      PatchAdapter.deletePatch(e.target.parentElement.id,this.props.gardens)
      .then( patches =>
        this.setState({
        patches: patches
      })
        )
      }

      yielder (yields){
        var total = 0
        yields.map((y) => {
          total += y.weight
        })
        return total
      }


  gardenDisplay (){
    return this.state.patches.map((patch)=>
    <div>
    <Card>
      <div className= "row">

        <div className= "col s4" >
        <Slider>
          {this.imageMapper(patch.images)}
        </Slider>
        </div>

        <div id={patch.id} className= "col s6" >
          <center> <h5> {patch.plant} </h5></center>
          <hr/>
            <p> Date planted: {patch.planted_on}</p>
            <p> Garden: {patch.garden}</p>
            <p> Number of Plants: {patch.number}</p>
            <p> Total Yield(g): {this.yielder(patch.yields)}</p>
            <p> Sunlight: {patch.sunlight} </p>
            <p> Substrate: {patch.substrate} </p>
            <p> Spacing (in): {patch.spacing} </p>
            <p> Seed depth(in): {patch.seed_depth} </p>
            <p> Watering schedule: {patch.water} </p>
            <p> Fertizler used: {patch.fertilizer} </p>
            <p> Notes: {patch.notes} </p>
            <button onClick ={this.onHarvestClick} className="btn waves-effect waves-light orange" >Harvest </button>
            <button onClick = {this.onEditClick} className="btn waves-effect waves-light purple"> Edit</button>
            <button onClick={this.onDeleteClick} className="btn waves-effect waves-light red"> Delete</button>
          </div>
      </div>
        <div key={patch.id} id={patch.id} className = "row">
          {(this.state.renderForm !==0)? this.renderEditForm(patch) : null}
        </div>
        <div id={patch.id} className = "row">
          {(this.state.harvestForm !==0)? this.harvestForm(patch) : null}
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

  editPatchSubmit(event){
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
    image5: event.target.image5.value,
    patch_id: event.target.parentElement.id
    }
    PatchAdapter.editPatch(newPatch)
    .then( patches =>
      this.setState({
      patches: patches,
      renderForm: 0,
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
      renderForm: 0,
      harvestForm: 0,
      harvested_on: "",
      yield: 0
    })
      )
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

    onHarvestSubmit(e){
      e.preventDefault()
      var newYield = {
        weight: e.target.yield.value,
        harvested_on: e.target.harvested_on.value,
        patch_id: e.target.parentElement.id,
        user_id: localStorage.user_id,
        garden_id: this.props.gardens
      }
      PatchAdapter.newYield(newYield)
      .then( patches =>
        this.setState({
          patches: patches,
          harvestForm: 0,
          yield: 0
      })
        )
      }

    harvestForm (patch){
    if (patch.id === this.state.harvestForm){
      return (
      <form onSubmit={this.onHarvestSubmit}>
        <div className = "col s4">
        <input type="text" name="harvested_on" placeholder="Date Harvested (mm/dd/yyyy)" value={this.state.harvested_on} onChange={this.handleChange} /><br/>
        Yield (g) : <input type="number" name="yield" placeholder="Yield" value={this.state.yield} onChange={this.handleChange} /><br/>
        <button className="btn waves-effect waves-light orange" type="submit" name="action">Harvest Plant(s)</button>
        </div>
      </form>
    )
  }else{
    return null
  }
    }

    renderForm(){
      return (
        <form style={{paddingLeft:20}} onSubmit={this.newPatchSubmit}>
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
          <button className="btn waves-effect waves-light purple" type="submit" name="action">Create Patch</button>
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
      )
    }

    renderEditForm(patch){
      if (patch.id === this.state.renderForm){
      return (
        <form  onSubmit={this.editPatchSubmit}>
        <div className = "col s6">
          <h4> Plant Info </h4>
          <input type="text" name="plant" placeholder={patch.plant} value={this.state.plant} onChange={this.handleChange} /><br/>
          Number of Plants: <input type="number" name="number" placeholder={patch.number}  value={this.state.number} onChange={this.handleChange} /><br/>
          <input type="text" name="fertilizer"  placeholder= "Fertilzer" placeholder={patch.fertilizer} value= {this.state.fertilizer} onChange={this.handleChange} /><br/>
          Plants Spacing(in): <input type="number" name="spacing" placeholder={patch.spacing} onChange={this.handleChange} /><br/>
          <input type="text" name="planted_on"  placeholder= "Planted On" placeholder={patch.planted_on} value={this.state.planted_on}  onChange={this.handleChange} /><br/>
          <input type="text" name="water" placeholder= "Watering Schedule" placeholder={patch.water} value={this.state.water}  onChange={this.handleChange} /><br/>
          <input type="text" name="sunlight"  placeholder= "Sunlght Received" placeholder={patch.sunlight} value={this.state.sunlight}  onChange={this.handleChange} /><br/>
          <input type="text" name="substrate"  placeholder= "Substrate" placeholder={patch.substrate} value={this.state.substrate} onChange={this.handleChange} /><br/>
          Seed Depth(in): <input type="number" name="seed_depth" placeholder={patch.seed_depth} value = {this.state.seed_depth}  onChange={this.handleChange} /><br/>
          <input type="textarea" name="notes"  placeholder= "Notes" placeholder={patch.notes} value={this.state.notes} onChange={this.handleChange} /><br/>
          <button className="btn waves-effect waves-light purple" type="submit" name="action">Edit Patch</button>
        </div>
        <div className = "col s6">
          <h4> Images </h4>
          <input type="text" name="image1" placeholder="Image URL" value={this.state.image1} onChange={this.handleChange} /><br/>
          <input type="text" name="image2" placeholder="Image URL" value={this.state.image2} onChange={this.handleChange} /><br/>
          <input type="text" name="image3" placeholder="Image URL" value={this.state.image3} onChange={this.handleChange} /><br/>
          <input type="text" name="image4" placeholder="Image URL" value={this.state.image4} onChange={this.handleChange} /><br/>
          <input type="text" name="image5" placeholder="Image URL" value={this.state.image5} onChange={this.handleChange} /><br/>
        </div>
        </form>
      )
    } else{
      return null
    }
    }

  render (){
    if (this.state.patches){
    return (
      <div>
      <Navbar style={{paddingLeft:20}} brand= "Add a Patch" className="light-green" right>
      </Navbar>
      <div className="row">
      {this.renderForm()}
      </div>
      <br></br>
      <Navbar style={{paddingLeft:20}} brand= "My Garden" className="light-green" right>
      </Navbar>
      {this.gardenDisplay()}
      </div>
    )
  } else{
    return (
      <div>
        return null
      </div>
    )
  }
  }
}
