import React, {Component} from 'react'
import PatchAdapter from '../adapters/patchAdapter'
import {  Navbar, Card , Icon, Slider, Slide} from 'react-materialize';

export default class AllMyPatches extends Component {

    constructor(props){
      super(props)
      this.state = {
        patches: [],
        search: ""
      }
      this.gardenDisplay = this.gardenDisplay.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.imageMapper = this.imageMapper.bind(this)
      this.yielder = this.yielder.bind(this)
    }

    componentDidMount(){
      if (localStorage.user_id) {
        PatchAdapter.allPatches(localStorage.user_id)
          .then(patches => {
            if (!patches.error) {
              this.setState({
                patches: patches
              })
            }
          })
      }
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

    yielder (yields){
      var total = 0
      yields.map((y) => {
        total += y.weight
      })
      return total
    }

    gardenDisplay (){
      return this.state.patches.map((patch)=>
      <Card>
        <div className= "row">
          <div className= "col s4" >
          <Slider>
          {this.imageMapper(patch.images)}
          </Slider>
          </div>
          <div className= "col s6">
            <center> <h5> {patch.plant} </h5></center>
            <hr/>
            <p> Planted by: {patch.userName} </p>
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
          </div>
        </div>
      </Card>
      )
    }

    handleChange (event){
      var patches = []
      var search = event.target.value
      var sortedPatches = this.state.patches.forEach((patch) =>{
        var strs = ""
        for (var i in patch){
          if (typeof patch[i] === "string"){
            strs += patch[i].toLowerCase() + " "
          }
        }
        var regex = new RegExp(search, 'g')
        var matches = strs.match(regex)
        if (matches && matches.length > 0){
          patches.push(patch)
        }
        strs = ""
    })
      this.setState({
        search: event.target.value,
        patches: patches
      })
    }

    render (){
      return (
        <div>
          <Navbar brand="All Plants"  className="light-green" right>
          </Navbar>
          <div className= "search-wrapper card">
            <form onSubmit={this.onSearchSubmit}>
              <input type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
              <button className="btn waves-effect waves-light light-green" type="submit" name="action"> Reset </button><br/>
            </form>
          </div>
          {this.gardenDisplay()}
        </div>
      )
    }
}
