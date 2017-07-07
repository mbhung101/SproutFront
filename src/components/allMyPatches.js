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
      this.onSearchSubmit = this.onSearchSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.imageMapper = this.imageMapper.bind(this)
    }

    componentDidMount(){
      if (localStorage.user_id) {
        PatchAdapter.getPatches(localStorage.user_id)
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
      return imgs.map((img)=>
      <Slide
        src={img.url}>
      </Slide>
    )
    }

    gardenDisplay (){
      return this.state.patches.map((patch)=>
      <Card>
        <div className= "row">
          <div className= "col s6" >
          <Slider>
          {this.imageMapper(patch.images)}
          </Slider>
          </div>
          <div className= "col s6">
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
        </div>
      </Card>
      )
    }

    onSearchSubmit(){

    }

    handleChange (event){
      this.setState({
        search: event.target.value
      })
    }

    render (){
      return (
        <div>
          <Navbar brand="All My Plants"  className="light-green" right>
          </Navbar>
          <div className= "search-wrapper card">
            <form onSubmit={this.onSearchSubmit}>
              <input type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
              <button className="btn waves-effect waves-light light-green" type="submit" name="action">
              <Icon tiny>search</Icon>
              </button><br/>
            </form>
          </div>
          {this.gardenDisplay()}
        </div>
      )
    }
}
